import { FaqIdEnum } from '../enums/faq-id.enum';
import { FaqItem } from '../interfaces/faq-item.interface';

/**
 * Lista de FAQs.
 */
export const FAQS: FaqItem[] = [
  {
    id: FaqIdEnum.SERVICOS,
    question: "Quais serviços a Gambeti Engenharia oferece?",
    answer: "A Gambeti oferece laudos técnicos NR13 (caldeiras e vasos de pressão), NR10 (instalações elétricas), NR20 (inflamáveis), treinamentos em todas as NRs (NR01 a NR39), gestão do eSocial SST e projetos de engenharia civil. Todos os serviços com ART."
  },
  {
    id: FaqIdEnum.CREA,
    question: "A Gambeti possui registro no CREA?",
    answer: "Sim. A Gambeti Engenharia possui registro ativo no CREA e todos os serviços são acompanhados de Anotação de Responsabilidade Técnica (ART), garantindo validade legal."
  },
  {
    id: FaqIdEnum.ATUACAO_BRASIL,
    question: "A Gambeti atende em todo o Brasil?",
    answer: "Sim. Possuímos atuação em todo o território nacional, com deslocamento de equipe técnica para inspeções, treinamentos e acompanhamento de obras em qualquer estado."
  },
  {
    id: FaqIdEnum.ESOCIAL,
    question: "O que é a gestão do eSocial SST?",
    answer: "O eSocial SST é a obrigação de enviar ao governo os eventos S-2210, S-2220 e S-2240 de Saúde e Segurança do Trabalho. O descumprimento gera multas. A Gambeti faz a gestão completa desses envios."
  },
  {
    id: FaqIdEnum.NR13,
    question: "Com que frequência é necessária a inspeção NR13?",
    answer: "Depende da categoria do equipamento. Caldeiras geralmente exigem inspeção periódica a cada 12 meses. Vasos de pressão seguem classificação de risco. A Gambeti realiza todas as inspeções com laudo e ART."
  }
];
