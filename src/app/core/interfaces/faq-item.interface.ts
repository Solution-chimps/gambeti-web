import { FaqIdEnum } from '../enums/faq-id.enum';

/**
 * Interface que representa uma pergunta e resposta do FAQ.
 */
export interface FaqItem {
  /** ID único do FAQ */
  id: FaqIdEnum;
  /** Pergunta do FAQ */
  question: string;
  /** Resposta do FAQ */
  answer: string;
}
