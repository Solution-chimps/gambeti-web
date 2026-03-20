import { StatItem } from '../interfaces/stat-item.interface';

export const STATS_NR20: StatItem[] = [
  {
    icon: 'fas fa-folder-open',
    title: 'Prontuário NR-20',
    description: 'Documentação completa',
    color: 'var(--gb-brand-secondary-500)',
  },
  {
    icon: 'fas fa-boxes-stacked',
    title: 'Inventário',
    description: 'Inflamáveis e combustíveis',
    color: 'var(--gb-brand-secondary-600)',
  },
  {
    icon: 'fas fa-layer-group',
    title: 'Classes I, II e III',
    description: 'Classificação NR-20',
    color: 'var(--gb-brand-secondary-600)',
  },
  {
    icon: 'fas fa-triangle-exclamation',
    title: 'Análise de Riscos',
    description: 'APR / HAZOP / What-If',
    color: 'var(--gb-feedback-danger-500)',
  },
  {
    icon: 'fas fa-graduation-cap',
    title: 'Treinamentos',
    description: '4h · 8h · 16h · 24h · 40h',
    color: '#8b5cf6',
  },
];
