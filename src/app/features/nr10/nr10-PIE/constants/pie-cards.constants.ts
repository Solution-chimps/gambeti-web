export interface PieCard {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  tag: string;
  tagType: 'norma' | 'obrig' | 'doc';
  color: {
    primary: string;
    light: string;
    dark: string;
  };
}

export const PIE_CARDS: PieCard[] = [
  {
    id: 'laudo-eletrico',
    title: 'Laudo Elétrico',
    subtitle: 'ABNT NBR 5410',
    icon: 'fas fa-file-shield',
    tag: 'NBR 5410',
    tagType: 'norma',
    color: {
      primary: '#2563eb',
      light: 'rgba(37, 99, 235, 0.1)',
      dark: '#1e40af'
    }
  },
  {
    id: 'laudo-spda',
    title: 'Laudo SPDA',
    subtitle: 'ABNT NBR 5419',
    icon: 'fas fa-cloud-bolt',
    tag: 'NBR 5419',
    tagType: 'norma',
    color: {
      primary: '#8b5cf6',
      light: 'rgba(139, 92, 246, 0.1)',
      dark: '#6d28d9'
    }
  },
  {
    id: 'termografia',
    title: 'Termografia',
    subtitle: 'Inspeção Infravermelha',
    icon: 'fas fa-temperature-high',
    tag: 'Prevenção',
    tagType: 'obrig',
    color: {
      primary: '#ef4444',
      light: 'rgba(239, 68, 68, 0.1)',
      dark: '#dc2626'
    }
  },
  {
    id: 'diagrama',
    title: 'Diagrama Unifilar',
    subtitle: 'Atualizado',
    icon: 'fas fa-project-diagram',
    tag: 'Obrigatório',
    tagType: 'obrig',
    color: {
      primary: '#10b981',
      light: 'rgba(16, 185, 129, 0.1)',
      dark: '#059669'
    }
  },
  {
    id: 'procedimentos',
    title: 'Procedimentos',
    subtitle: 'Segurança',
    icon: 'fas fa-clipboard-list',
    tag: 'NR-10',
    tagType: 'obrig',
    color: {
      primary: '#f59e0b',
      light: 'rgba(245, 158, 11, 0.1)',
      dark: '#d97706'
    }
  },
  {
    id: 'epi',
    title: 'EPI e EPC',
    subtitle: 'Especificação',
    icon: 'fas fa-hard-hat',
    tag: 'Especificação',
    tagType: 'doc',
    color: {
      primary: '#ec489a',
      light: 'rgba(236, 72, 153, 0.1)',
      dark: '#db2777'
    }
  }
];
