import { SectorIdEnum } from '../enums/sector-id.enum';

/**
 * Interface que representa um setor com ícone e nome.
 */
export interface Sector {
  /** ID único do setor, baseado no enum `SectorId` */
  id: SectorIdEnum;
  /** Ícone do FontAwesome associado ao setor */
  icon: string;
  /** Nome exibido do setor */
  label: string;
}
