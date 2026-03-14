import { DifferentialsIdEnum } from '../enums/differentials-id.enum';
import { Differential } from '../interfaces/differential.interface';

/**
import { DifferentialsIdEnum } from '../enums/differentials-id.enum';
import { Differential } from '../interfaces/differential.interface';

 * Lista de diferenciais exibidos na seção institucional.
 */
export const DIFFERENTIALS: Differential[] = [
  {
    id: DifferentialsIdEnum.MULTIDISCIPLINAR,
    icon: 'fas fa-users-gear',
    title: 'Equipe Multidisciplinar',
    description:
      'Engenheiros de segurança, mecânicos, eletricistas e civis trabalhando de forma integrada.'
  },

  {
    id: DifferentialsIdEnum.ATUACAO_BRASIL,
    icon: 'fas fa-map-location-dot',
    title: 'Atuação em Todo o Brasil',
    description:
      'Atendemos empresas de todos os estados com deslocamento de equipe técnica.'
  },

  {
    id: DifferentialsIdEnum.CONFORMIDADE_LEGAL,
    icon: 'fas fa-file-shield',
    title: 'Conformidade Legal',
    description:
      'Laudos e projetos conforme NRs e ABNT, acompanhados de ART.'
  },

  {
    id: DifferentialsIdEnum.AGILIDADE_PRAZOS,
    icon: 'fas fa-clock',
    title: 'Agilidade e Prazos',
    description:
      'Trabalhamos com prazos realistas e entregas pontuais.'
  },

  {
    id: DifferentialsIdEnum.ATENDIMENTO_PERSONALIZADO,
    icon: 'fas fa-handshake',
    title: 'Atendimento Personalizado',
    description:
      'Analisamos sua operação antes de propor a melhor solução técnica.'
  },

  {
    id: DifferentialsIdEnum.CERTIFICACOES_NACIONAIS,
    icon: 'fas fa-certificate',
    title: 'Certificações Nacionais',
    description:
      'Treinamentos e laudos com certificação reconhecida em todo o país.'
  }
];
