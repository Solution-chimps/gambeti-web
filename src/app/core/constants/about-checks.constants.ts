import { AboutCheckType } from '../enums/about-check.types';

export const ABOUT_CHECKS: AboutCheck[] = [
  {
    id: AboutCheckType.CREA,
    icon: 'fas fa-check-circle',
    text: 'Registro CREA ativo'
  },
  {
    id: AboutCheckType.ART,
    icon: 'fas fa-check-circle',
    text: 'Emissão de ART'
  },
  {
    id: AboutCheckType.BRASIL,
    icon: 'fas fa-check-circle',
    text: 'Atuação em todo o Brasil'
  },
  {
    id: AboutCheckType.EQUIPE,
    icon: 'fas fa-check-circle',
    text: 'Equipe multidisciplinar'
  },
  {
    id: AboutCheckType.LAUDOS,
    icon: 'fas fa-check-circle',
    text: 'Laudos com validade legal'
  },
  {
    id: AboutCheckType.NRS,
    icon: 'fas fa-check-circle',
    text: 'Conformidade total com NRs'
  }
];
