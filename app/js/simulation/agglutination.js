const ATTRACTION_RADIUS = 60;
const ATTRACTION_FORCE = 0.02;
const CLUSTER_RADIUS = 12;
const NUM_SEEDS = 4;
const DAMPING = 0.92;

export class AgglutinationEngine {
  constructor() {
    this.active = false;
    this.clusters = [];
    this.progress = 0;
  }

  start(particles) {
    if (this.active) return;
    this.active = true;
    this.progress = 0;
    this.clusters = [];

    const eligible = particles.filter(p => p.clusterId === null);
    if (eligible.length < NUM_SEEDS) return;

    const shuffled = eligible.sort(() => Math.random() - 0.5);
    for (let i = 0; i < NUM_SEEDS && i < shuffled.length; i++) {
      const seed = shuffled[i];
      seed.clusterId = i;
      seed.color = seed.clusterColor;
      seed.opacity = 0.85;
      this.clusters.push({
        id: i,
        centroidX: seed.x,
        centroidY: seed.y,
        particles: [seed]
      });
    }
  }

  update(dt, particles) {
    if (!this.active) return;
    this.progress += dt;

    for (const p of particles) {
      if (p.clusterId === null) {
        this._attractToNearestCluster(p);
      } else {
        this._maintainInCluster(p);
      }
    }

    this._recalculateCentroids();
  }

  _attractToNearestCluster(particle) {
    let nearest = null;
    let minDist = Infinity;

    for (const cluster of this.clusters) {
      const dx = cluster.centroidX - particle.x;
      const dy = cluster.centroidY - particle.y;
      const dist = Math.hypot(dx, dy);
      if (dist < minDist) {
        minDist = dist;
        nearest = cluster;
      }
    }

    if (!nearest) return;

    if (minDist < ATTRACTION_RADIUS) {
      const fx = (nearest.centroidX - particle.x) * ATTRACTION_FORCE;
      const fy = (nearest.centroidY - particle.y) * ATTRACTION_FORCE;
      particle.vx += fx;
      particle.vy += fy;
    }

    if (minDist < CLUSTER_RADIUS) {
      particle.clusterId = nearest.id;
      particle.color = particle.clusterColor;
      particle.opacity = 0.85;
      nearest.particles.push(particle);
    }
  }

  _maintainInCluster(particle) {
    const cluster = this.clusters.find(c => c.id === particle.clusterId);
    if (!cluster) return;

    const dx = cluster.centroidX - particle.x;
    const dy = cluster.centroidY - particle.y;
    const dist = Math.hypot(dx, dy);

    if (dist > CLUSTER_RADIUS * 2.5) {
      const pull = 0.005;
      particle.vx += dx * pull;
      particle.vy += dy * pull;
    }

    particle.vx += (Math.random() - 0.5) * 0.06;
    particle.vy += (Math.random() - 0.5) * 0.06;
    particle.vx *= DAMPING;
    particle.vy *= DAMPING;
  }

  _recalculateCentroids() {
    for (const cluster of this.clusters) {
      if (cluster.particles.length === 0) continue;
      let sumX = 0, sumY = 0;
      for (const p of cluster.particles) {
        sumX += p.x;
        sumY += p.y;
      }
      cluster.centroidX = sumX / cluster.particles.length;
      cluster.centroidY = sumY / cluster.particles.length;
    }
  }

  reset() {
    this.active = false;
    this.clusters = [];
    this.progress = 0;
  }
}
