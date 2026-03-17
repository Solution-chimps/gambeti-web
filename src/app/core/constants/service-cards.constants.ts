import { ServiceCard } from '../interfaces/service-card.interface';

export const SERVICE_CARDS: ServiceCard[] = [
  {
    icon: 'fas fa-fire-flame-curved',
    title: 'Laudos e Inspeções NR13',
    tag: 'NR13',
    description: `Serviços completos de engenharia mecânica para caldeiras, vasos de pressão e tubulações,
    conforme a Norma Regulamentadora NR13. Inspeções periódicas, adequações e emissão de laudos técnicos.`,
    routerLink: ['nr13']
  },
  {
    icon: 'fas fa-bolt',
    title: 'Laudos e Projetos NR10',
    tag: 'NR10',
    description: `Soluções completas em segurança de instalações elétricas conforme NR10 e normas ABNT.
    Laudos elétricos, projetos de adequação, inspeções e prontuários técnicos.`,
    routerLink: []
  },
  {
    icon: 'fas fa-droplet',
    title: 'Laudos NR20',
    tag: 'NR20',
    description: `Laudos técnicos, adequações e análises de riscos para operações seguras com líquidos
    inflamáveis e combustíveis, em conformidade com a NR20.`,
    routerLink: []
  },
  {
    icon: 'fas fa-graduation-cap',
    title: 'Treinamentos NR',
    tag: 'NR01 — NR39',
    description: `Capacitação obrigatória em todas as Normas Regulamentadoras do Ministério do Trabalho.
    Treinamentos presenciais, online (EAD) e in company.`,
    routerLink: []
  },
  {
    icon: 'fas fa-laptop-code',
    title: 'Gestão eSocial SST',
    tag: 'eSocial SST',
    description: `Gestão completa dos eventos obrigatórios de Saúde e Segurança do Trabalho no eSocial
    (S-2210, S-2220, S-2240), garantindo conformidade legal.`,
    routerLink: []
  }
];
