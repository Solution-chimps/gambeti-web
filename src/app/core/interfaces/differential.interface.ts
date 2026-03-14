import { DifferentialsIdEnum } from '../enums/differentials-id.enum';

/**
 * Representa um diferencial competitivo da empresa.
import { DifferentialsIdEnum } from '../enums/differentials-id.enum';

 */
export interface Differential {

  /**
   * Identificador único do diferencial.
   */
  id: DifferentialsIdEnum;

  /**
   * Classe do ícone (FontAwesome).
   */
  icon: string;

  /**
   * Título exibido no card.
   */
  title: string;

  /**
   * Descrição resumida do diferencial.
   */
  description: string;
}
