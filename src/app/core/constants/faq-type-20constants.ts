import { FaqTypeEnum } from '../enums/faq-type.enum';
import { FaqTypeItem } from '../interfaces/faq-type.interface';

export const FAQ_TYPE_NR20: FaqTypeItem[] = [
  {
    question: 'O que é o laudo NR-20 e para que serve?',
    answer: 'O laudo NR-20 é o conjunto de documentos técnicos que compõe o Prontuário da Instalação, exigido pela Norma Regulamentadora nº 20 para estabelecimentos que armazenam, manuseiam, transferem ou processam líquidos inflamáveis e combustíveis. Ele comprova a gestão de segurança para prevenir incêndios, explosões e vazamentos.',
    type: FaqTypeEnum.O_QUE_E_LAUDO_NR20
  },
  {
    question: 'Quem precisa ter o Prontuário da Instalação NR-20?',
    answer: 'Toda empresa que extrai, produz, armazena, transfere ou manipula inflamáveis e líquidos combustíveis, como postos de combustíveis, indústrias químicas, refinarias, usinas de etanol, laboratórios e distribuidoras.',
    type: FaqTypeEnum.QUEM_PRECISA_PRONTUARIO
  },
  {
    question: 'Quais são as Classes I, II e III da NR-20?',
    answer: 'Classe I: postos de serviço e instalações menores. Classe II: engarrafadoras e instalações intermediárias. Classe III: refinarias, petroquímicas e usinas. A classe define exigências e treinamentos.',
    type: FaqTypeEnum.CLASSES_NR20
  },
  {
    question: 'Quais são os níveis de treinamento da NR-20?',
    answer: 'Iniciação (4h), Básico (8h), Intermediário (16h), Avançado I (24h) e Avançado II (40h), com reciclagem obrigatória a cada 3 anos.',
    type: FaqTypeEnum.NIVEIS_TREINAMENTO
  },
  {
    question: 'Qual a diferença entre Avançado I e Avançado II?',
    answer: 'Avançado I é para quem acessa áreas Classe III sem atuar diretamente. Avançado II é para quem atua diretamente em operação, manutenção, inspeção e emergências.',
    type: FaqTypeEnum.DIFERENCA_AVANCADO
  },
  {
    question: 'Com que frequência a análise de riscos deve ser atualizada?',
    answer: 'Até 5 anos para Classes I e II, e 3 anos para Classe III, ou sempre que houver mudanças, acidentes ou exigência legal.',
    type: FaqTypeEnum.FREQUENCIA_ANALISE_RISCO
  },
  {
    question: 'O que é Permissão de Trabalho (PT)?',
    answer: 'Documento que autoriza atividades não rotineiras ou trabalhos a quente em áreas com inflamáveis, exigindo análise de risco e medidas de segurança.',
    type: FaqTypeEnum.PERMISSAO_TRABALHO
  },
  {
    question: 'Qual a diferença entre inflamável e combustível?',
    answer: 'Inflamáveis possuem ponto de fulgor abaixo de 60°C. Combustíveis entre 60°C e 93°C. Inflamáveis apresentam maior risco.',
    type: FaqTypeEnum.DIFERENCA_INFLAMAVEL
  },
  {
    question: 'O que acontece sem o prontuário NR-20?',
    answer: 'Pode gerar autuação, interdição, multas e responsabilização civil e criminal em caso de acidentes.',
    type: FaqTypeEnum.SEM_PRONTUARIO
  },
  {
    question: 'A Gambeti elabora o prontuário completo?',
    answer: 'Sim, incluindo inventário, análise de riscos, procedimentos, plano de emergência, treinamentos e ART do engenheiro responsável.',
    type: FaqTypeEnum.GAMBETI_PRONTUARIO
  },
  {
    question: 'Postos de combustíveis precisam de NR-20?',
    answer: 'Sim. São Classe I e devem possuir prontuário completo e treinamentos obrigatórios para os trabalhadores.',
    type: FaqTypeEnum.POSTOS_NR20
  }
];
