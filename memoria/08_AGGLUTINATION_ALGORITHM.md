# 🧬 Algoritmo de Aglutinação — Referência Técnica

## 1. Contexto

Este documento detalha o algoritmo do sistema de partículas (hemácias) e a simulação de aglutinação, que é o **coração visual** do simulador ABO Sim. A IA executora deve seguir esta especificação ao implementar os arquivos `particle.js`, `particle-system.js` e `agglutination.js`.

---

## 2. Modelo da partícula

```javascript
class Particle {
  constructor(well) {
    this.x = well.centerX + randomRange(-well.radius * 0.6, well.radius * 0.6);
    this.y = well.centerY + randomRange(-well.radius * 0.6, well.radius * 0.6);
    this.vx = randomRange(-0.5, 0.5);      // Brownian velocity
    this.vy = randomRange(-0.5, 0.5);
    this.radius = randomRange(5, 8);         // Visual radius
    this.baseColor = 'hsl(0, 65%, 40%)';     // Hemácia normal
    this.clusterColor = 'hsl(0, 70%, 28%)';  // Hemácia em cluster
    this.color = this.baseColor;
    this.opacity = 0;                        // Fade-in
    this.clusterId = null;                   // null = livre
    this.mass = 1;
    this.friction = 0.98;
  }
}
```

---

## 3. Brownian Motion (não-aglutinação)

Quando o sangue NÃO reage com o reagente, as partículas devem se mover aleatoriamente, simulando hemácias livres em solução.

```
A cada frame (dt ≈ 16ms):
  1. Aplicar perturbação aleatória:
     vx += randomRange(-0.1, 0.1)
     vy += randomRange(-0.1, 0.1)
  
  2. Aplicar fricção (desaceleração):
     vx *= 0.98
     vy *= 0.98
  
  3. Limitar velocidade máxima:
     speed = sqrt(vx² + vy²)
     if speed > MAX_SPEED (1.5):
       vx = (vx / speed) * MAX_SPEED
       vy = (vy / speed) * MAX_SPEED
  
  4. Atualizar posição:
     x += vx * dt
     y += vy * dt
  
  5. Colisão com parede circular do poço:
     dist = distância(partícula, centro_do_poço)
     if dist + particleRadius > wellRadius:
       // Refletir velocidade na normal
       nx = (x - well.centerX) / dist
       ny = (y - well.centerY) / dist
       dot = vx * nx + vy * ny
       vx -= 2 * dot * nx
       vy -= 2 * dot * ny
       // Empurrar para dentro
       x = well.centerX + nx * (wellRadius - particleRadius - 1)
       y = well.centerY + ny * (wellRadius - particleRadius - 1)
```

---

## 4. Aglutinação (clustering)

Quando o sangue REAGE com o reagente (antígeno presente + anticorpo correspondente), as partículas devem se agrupar em clusters visíveis.

### 4.1 Algoritmo de clustering

```
Constantes:
  ATTRACTION_RADIUS = 60px      // Distância de atração
  ATTRACTION_FORCE  = 0.02      // Intensidade da força
  CLUSTER_RADIUS    = 12px      // Distância para considerar "clusterizado"
  NUM_SEEDS         = 4         // Número de pontos sementes (centroides)
  DAMPING           = 0.92      // Amortecimento no cluster

Inicialização (quando reação é detectada):
  1. Escolher 4 partículas aleatórias como "sementes" de cluster
  2. Atribuir clusterId = 0,1,2,3 às sementes
  3. Calcular centroides iniciais dos clusters

A cada frame (dt ≈ 16ms):
  Para cada partícula livre (clusterId === null):
    1. Encontrar cluster mais próximo (centroide)
    2. Se distância < ATTRACTION_RADIUS:
       - Calcular vetor de atração em direção ao centroide
       - Aplicar força: 
         fx = (centroid.x - particle.x) * ATTRACTION_FORCE
         fy = (centroid.y - particle.y) * ATTRACTION_FORCE
       - vx += fx
       - vy += fy
    3. Se distância < CLUSTER_RADIUS:
       - Atribuir clusterId = id_do_cluster
       - Reduzir velocidade (DAMPING)
       - Mudar cor para clusterColor
       - Aumentar opacidade
  
  Para cada partícula em cluster (clusterId !== null):
    1. Manter próxima ao centroide com força elástica fraca
    2. Adicionar micro-vibração (jitter) para naturalismo
       vx += randomRange(-0.03, 0.03)
       vy += randomRange(-0.03, 0.03)
    3. Aplicar damping forte (0.92)
    4. Manter dentro do raio do cluster
  
  Recalcular centroides:
    Para cada cluster:
      centroid.x = média(x de todas as partículas do cluster)
      centroid.y = média(y de todas as partículas do cluster)
```

### 4.2 Progressão temporal

```
t=0s    → Reação detectada. Partículas ainda dispersas.
t=0.5s  → Sementes identificadas. Partículas começam a ser atraídas.
t=1.0s  → ~40% das partículas em clusters. Clusters visíveis.
t=1.5s  → ~70% em clusters. Padrão claro de aglutinação.
t=2.0s  → ~90% em clusters. Aglutinação quase completa.
t=2.5s  → ~100%. Clusters estabilizados com micro-jitter.
t=3.0s  → Resultado "POSITIVO" exibido no poço.
```

### 4.3 Visual dos clusters

```
Cluster estabilizado:
  - 6-15 partículas agrupadas
  - Raio total do cluster: 20-35px
  - Partículas se tocam/sobrepõem levemente
  - Cor mais escura que partículas livres
  - Opacidade mais alta (0.85 vs 0.6)
  - Micro-vibração dá sensação de "vivo"
  - Cluster inteiro se move lentamente (drift)

Não-cluster (Brownian):
  - Partículas espaçadas uniformemente
  - Cor mais clara
  - Opacidade mais baixa (0.6)
  - Movimento individual aleatório
  - Sem agrupamento visível
```

---

## 5. Renderização (Canvas 2D)

```javascript
// Dentro do draw loop
function drawParticle(ctx, particle) {
  ctx.beginPath();
  ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
  ctx.fillStyle = particle.color;
  ctx.globalAlpha = particle.opacity;
  ctx.fill();
  
  // Borda sutil para dar profundidade
  ctx.strokeStyle = 'rgba(0, 0, 0, 0.15)';
  ctx.lineWidth = 0.5;
  ctx.stroke();
  
  ctx.globalAlpha = 1;
}

// Para o poço
function drawWell(ctx, well) {
  // Fundo do poço (sutil)
  ctx.beginPath();
  ctx.arc(well.centerX, well.centerY, well.radius, 0, Math.PI * 2);
  ctx.fillStyle = well.bgColor; // from design system
  ctx.fill();
  
  // Borda do poço
  ctx.strokeStyle = well.borderColor; // Anti-A=azul, Anti-B=amarelo, Anti-D=verde
  ctx.lineWidth = 3;
  ctx.stroke();
  
  // Rótulo
  ctx.fillStyle = well.labelColor;
  ctx.font = '14px Inter';
  ctx.textAlign = 'center';
  ctx.fillText(well.label, well.centerX, well.centerY + well.radius + 20);
}
```

---

## 6. Otimizações de performance

| Técnica | Descrição |
|:---|:---|
| Object pooling | Pré-alocar array de partículas; reusar ao invés de criar/destruir |
| Spatial hashing | Para detecção de proximidade em O(n) ao invés de O(n²) |
| Render skipping | Se nenhuma partícula se moveu >0.5px, skip redraw desse poço |
| Offscreen detection | Não calcular partículas fora da viewport |
| requestAnimationFrame | Sincroniza com refresh rate do monitor |
| Delta time | Usar dt para independência de framerate |

---

## 7. Tabela de reação Antígeno-Anticorpo

Referência rápida para `blood-logic.js`:

```
shouldAgglutinate(bloodType, reagent):

          │ Anti-A │ Anti-B │ Anti-D │
  ────────┼────────┼────────┼────────┤
  A+      │  SIM   │  NÃO   │  SIM   │
  A-      │  SIM   │  NÃO   │  NÃO   │
  B+      │  NÃO   │  SIM   │  SIM   │
  B-      │  NÃO   │  SIM   │  NÃO   │
  AB+     │  SIM   │  SIM   │  SIM   │
  AB-     │  SIM   │  SIM   │  NÃO   │
  O+      │  NÃO   │  NÃO   │  SIM   │
  O-      │  NÃO   │  NÃO   │  NÃO   │
```

Esta tabela é a **verdade absoluta** do simulador. Qualquer resultado diferente é um bug.
