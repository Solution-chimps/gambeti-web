import { FaqTypeEnum } from '../enums/faq-type.enum';
import { FaqTypeItem } from '../interfaces/faq-type.interface';

export const FAQ_SST_TYPE: FaqTypeItem[] = [
  {
    question: 'O que é o PGR e por que ele substituiu o PPRA?',
    answer: 'O PGR (Programa de Gerenciamento de Riscos) substituiu o PPRA desde 3 de janeiro de 2022. Abrange os 5 grupos de riscos ocupacionais e é composto pelo Inventário de Riscos e Plano de Ação, com revisão contínua.',
    type: FaqTypeEnum.DOCUMENTACAO
  },
  {
    question: 'Quais são os Anexos da NR-16 (Periculosidade)?',
    answer: 'A NR-16 possui anexos como Explosivos, Inflamáveis, Segurança Patrimonial, Energia Elétrica, Motocicleta, Agentes de Trânsito e Radiações Ionizantes, com adicional de 30% sobre o salário.',
    type: FaqTypeEnum.SEGURANCA
  },
  {
    question: 'O que mudou no Anexo V da NR-16 — Motocicleta?',
    answer: 'Define atividades perigosas com motocicletas em vias públicas, excluindo deslocamento casa-trabalho e uso eventual. Exige laudo técnico por profissional habilitado.',
    type: FaqTypeEnum.SEGURANCA
  },
  {
    question: 'Qual a diferença entre Laudo de Insalubridade e Periculosidade?',
    answer: 'NR-15: insalubridade com adicionais de 10%, 20% ou 40%. NR-16: periculosidade com adicional de 30%. Não são cumulativos.',
    type: FaqTypeEnum.DOCUMENTACAO
  },
  {
    question: 'Para que serve o LTCAT e quando é obrigatório?',
    answer: 'Documento previdenciário obrigatório para comprovar exposição a agentes nocivos e base para aposentadoria especial junto ao INSS.',
    type: FaqTypeEnum.DOCUMENTACAO
  },
  {
    question: 'Quais são os eventos de SST no eSocial?',
    answer: 'S-2210 (CAT), S-2220 (ASO) e S-2240 (Condições Ambientais), com prazos definidos e obrigatoriedade desde 2023.',
    type: FaqTypeEnum.ESOCIAL
  },
  {
    question: 'Quem é o responsável técnico pelos documentos de SST?',
    answer: 'Engenheiro de Segurança do Trabalho com ART. O PCMSO é responsabilidade do Médico do Trabalho.',
    type: FaqTypeEnum.PROFISSIONAL
  },
  {
    question: 'O que é o Anexo VI da NR-16 — Agentes de Trânsito?',
    answer: 'Regulamenta periculosidade para agentes de trânsito expostos a riscos como colisões e atropelamentos.',
    type: FaqTypeEnum.SEGURANCA
  },
  {
    question: 'O que diz o item 16.3.1 da NR-16?',
    answer: 'Determina que o laudo de periculosidade deve estar disponível aos trabalhadores, sindicatos e fiscalização.',
    type: FaqTypeEnum.DOCUMENTACAO
  },
  {
    question: 'Quais as penalidades por não possuir PGR, LTCAT ou Laudos?',
    answer: 'Multas, interdições, passivos trabalhistas, ação regressiva do INSS e responsabilização criminal.',
    type: FaqTypeEnum.INSPECAO
  }
];
