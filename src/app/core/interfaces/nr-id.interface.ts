import { NRIdEnum } from '../enums/nr-id.enum';

/**
 * Interface que representa uma NR.
 */
export interface NR {
  /** ID único da NR */
  id: NRIdEnum;
  /** Texto exibido */
  label: string;
  /** Se é destaque (featured) */
  featured?: boolean;
}
