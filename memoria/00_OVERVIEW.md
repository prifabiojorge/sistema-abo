# 🧪 Simulador Interativo de Tipagem Sanguínea ABO/Rh

## Visão do Produto

**Nome do projeto:** ABO Sim  
**Versão alvo:** 1.1.0 (Com Modo Inverso/Diagnóstico Livre)  
**Data de início:** 2026-04-24  
**Deadline estimado:** 2026-05-04 (10 dias úteis)

---

## 1. Propósito

Aplicação web educativa que simula visualmente o teste laboratorial de tipagem sanguínea ABO/Rh. O usuário interage com poços de reagentes virtuais (Anti-A, Anti-B, Anti-D), observa animações de aglutinação em tempo real com sistema de partículas, e aprende os fundamentos de imunohematologia de forma segura, engajante e cientificamente correta.

## 2. Público-alvo

| Persona | Descrição | Necessidade principal |
|:---|:---|:---|
| **Aluno (14-18 anos)** | Estudante do Ensino Médio em aula de Biologia | Compreender visualmente o sistema ABO sem medo de agulhas |
| **Servidor escolar** | Professor ou funcionário em ação de saúde | Entender seu tipo sanguíneo e compatibilidade sem riscos |
| **Professor de Biologia** | Docente que conduz a atividade | Ferramenta pedagógica segura com painel de acompanhamento |
| **Gestor escolar** | Diretor/Coordenador | Demonstrar ação educativa sem riscos biológicos/jurídicos |

## 3. Problemas que resolve (mapeados do PROBLEMAS.txt)

### 3.1 Eliminação total de riscos

| Dimensão de risco | Status com o simulador |
|:---|:---|
| Biossegurança (agulhas, patógenos, HIV, HBV, HCV) | ✅ **Eliminado** — zero sangue real |
| LGPD (dados sensíveis de saúde) | ✅ **Eliminado** — dados simulados, não pessoais |
| Descoberta de não-paternidade | ✅ **Eliminado** — tipos sanguíneos são ficcionais |
| PGRSS (resíduos de saúde) | ✅ **Eliminado** — zero resíduos biológicos |
| Profissional de saúde habilitado | ✅ **Eliminado** — qualquer professor pode aplicar |
| Desmaios/síncope vasovagal | ✅ **Eliminado** — sem punção, sem medo |
| Responsabilidade civil | ✅ **Eliminado** — sem procedimento invasivo |
| Qualidade analítica (D fraco, Rouleaux) | ✅ **Mitigado** — resultados controlados, sem erro |

### 3.2 Potencialização pedagógica

| Aspecto | Como o simulador potencializa |
|:---|:---|
| Engajamento | Gamificação, animações, feedback imediato |
| Retenção de conhecimento | Aprender fazendo (simulação) > ouvir (aula expositiva) |
| Desmistificação | Módulo "Mitos vs. Fatos" combate pseudociência |
| Acessibilidade | Funciona em qualquer dispositivo, modo alto contraste |
| Escalabilidade | Todos usam simultaneamente sem filas |
| Continuidade | Reutilizável ano após ano, sem custo recorrente |

## 4. Restrições e Premissas

### 4.1 Restrições técnicas
- **Sem backend/servidor**: Deve funcionar como arquivo HTML estático (abre offline)
- **Sem frameworks pesados**: Vanilla HTML + CSS + JavaScript apenas
- **Sem dependências CDN obrigatórias**: Tudo embutido (funciona sem internet)
- **Sem coleta de dados pessoais**: Nenhum formulário que identifique o usuário
- **Compatibilidade**: Chrome 90+, Firefox 88+, Edge 90+, Safari 14+
- **Responsivo**: Desktop, tablet e celular (min 320px)

### 4.2 Premissas
- Professor terá acesso a projetor ou computadores/tablets em sala
- Público fala Português Brasileiro
- Cor não é o único indicador de informação (acessibilidade para daltonismo)
- Conteúdo validado por referências de imunohematologia

## 5. Critérios de sucesso (MVP)

| Critério | Meta |
|:---|:---|
| Tempo de carregamento | < 3 segundos em 3G |
| Funciona offline | ✅ após primeiro carregamento |
| Cobertura de tipos sanguíneos | 8 tipos (A+, A-, B+, B-, AB+, AB-, O+, O-) |
| Quiz funcional | Mínimo 20 perguntas |
| Animação de aglutinação | Fluida a 60fps em dispositivos médios |
| Acessibilidade | WCAG 2.1 AA (contraste, teclado, screen reader) |
| Tamanho do bundle | < 2MB total (incluindo assets) |

## 6. Entregáveis

1. `index.html` — Arquivo único ou conjunto de arquivos estáticos
2. Documentação do professor (como usar em sala)
3. Banco de questões do quiz (JSON)
4. Assets visuais (SVGs de hemácias, anticorpos, poços)

## 7. Referências científicas para o conteúdo

- Genética mendeliana do sistema ABO (alelos IA, IB, i)
- Antígenos A, B e D (Rh) na superfície eritrocitária
- Reações antígeno-anticorpo e aglutinação
- Compatibilidade transfusional ABO/Rh
- Subgrupos de A (A1, A2) e D fraco (nível avançado)
- Doença Hemolítica do Recém-Nascido (DHRN) por incompatibilidade Rh

---

> [!NOTE]
> Este documento é a **visão geral** do projeto. Os detalhes de arquitetura, design, features, implementação e orquestração estão nos documentos subsequentes (`01_` a `08_`).
