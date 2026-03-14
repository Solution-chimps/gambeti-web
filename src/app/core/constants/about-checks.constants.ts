import { AboutCheckEnum } from '../enums/about-check.enum';

export const ABOUT_CHECKS: AboutCheck[] = [
  {
    id: AboutCheckEnum.CREA,
    icon: 'fas fa-check-circle',
    text: 'Registro CREA ativo'
  },
  {
    id: AboutCheckEnum.ART,
    icon: 'fas fa-check-circle',
    text: 'Emissão de ART'
  },
  {
    id: AboutCheckEnum.BRASIL,
    icon: 'fas fa-check-circle',
    text: 'Atuação em todo o Brasil'
  },
  {
    id: AboutCheckEnum.EQUIPE,
    icon: 'fas fa-check-circle',
    text: 'Equipe multidisciplinar'
  },
  {
    id: AboutCheckEnum.LAUDOS,
    icon: 'fas fa-check-circle',
    text: 'Laudos com validade legal'
  },
  {
    id: AboutCheckEnum.NRS,
    icon: 'fas fa-check-circle',
    text: 'Conformidade total com NRs'
  }
];
