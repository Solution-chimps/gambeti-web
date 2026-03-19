import { FaqTypeEnum } from '../enums/faq-type.enum';

/**
 * Interface que representa uma pergunta e resposta do FAQ.
 */
export interface FaqTypeItem {
  /** ID único do FAQ */
  type: FaqTypeEnum;
  /** Pergunta do FAQ */
  question: string;
  /** Resposta do FAQ */
  answer: string;

}
