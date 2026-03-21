import { FaqTypeEnum } from '../enums/faq-type.enum';
import { FaqTypeItem } from '../interfaces/faq-type.interface';

export const TRAINING_FAQ_TYPE: FaqTypeItem[] = [
  {
    question: 'Quantas Normas Regulamentadoras existem no Brasil?',
    answer: 'Existem 38 Normas Regulamentadoras (NR-01 a NR-38), sendo 36 vigentes. A NR-02 e a NR-27 foram revogadas. Todas são obrigatórias conforme a Portaria nº 3.214/78.',
    type: FaqTypeEnum.GERAL_TRAINING
  },
  {
    question: 'Qual a carga horária do treinamento NR-10 (Eletricidade)?',
    answer: 'Curso Básico NR-10: 40h. Curso Complementar SEP: 40h. Reciclagem: 8h a cada 2 anos ou conforme necessidade.',
    type: FaqTypeEnum.CARGA_HORARIA
  },
  {
    question: 'Qual a diferença entre Vigia e Supervisor de Entrada na NR-33?',
    answer: 'Vigia: permanece externo, monitora e aciona resgate (16h). Supervisor: emite PET, coordena e valida segurança (40h). Reciclagem anual de 8h.',
    type: FaqTypeEnum.TREINAMENTO
  },
  {
    question: 'De quanto em quanto tempo reciclar o treinamento NR-35?',
    answer: 'A cada 2 anos, com carga mínima de 8h. Também em casos de mudança, afastamento ou eventos de risco.',
    type: FaqTypeEnum.VALIDADE
  },
  {
    question: 'Preciso de treinamento para operar empilhadeira?',
    answer: 'Sim. NR-11 exige operador qualificado com treinamento específico (mín. 8h). Deve portar identificação com tipo de equipamento.',
    type: FaqTypeEnum.TREINAMENTO
  },
  {
    question: 'A NR-20 tem quantos níveis de treinamento?',
    answer: 'São 5 níveis: Iniciação (4h), Básico (8h), Intermediário (16h), Avançado I (24h) e Avançado II (40h). Reciclagem a cada 3 anos.',
    type: FaqTypeEnum.TREINAMENTO
  },
  {
    question: 'Qual a carga horária do curso NR-13?',
    answer: 'Caldeiras: 40h. Unidades de Processo: 40h. Reciclagem a partir de 8h conforme NR-13.',
    type: FaqTypeEnum.CARGA_HORARIA
  },
  {
    question: 'Os treinamentos podem ser realizados in company?',
    answer: 'Sim. Treinamentos realizados na empresa do cliente, adaptados à realidade operacional.',
    type: FaqTypeEnum.MODALIDADE
  },
  {
    question: 'O certificado tem validade nacional?',
    answer: 'Sim. Certificados com ART e CREA possuem validade em todo o Brasil.',
    type: FaqTypeEnum.CERTIFICACAO
  },
  {
    question: 'A NR-12 exige treinamento para operar máquinas?',
    answer: 'Sim. Exige capacitação conforme riscos da máquina. Carga horária mínima a partir de 4h.',
    type: FaqTypeEnum.TREINAMENTO
  },
  {
    question: 'O que é Brigada de Incêndio e treinamento NR-23?',
    answer: 'Equipe treinada para prevenção e combate a incêndios. Formação a partir de 8h com reciclagem anual.',
    type: FaqTypeEnum.SEGURANCA_TRAINING
  }
];
