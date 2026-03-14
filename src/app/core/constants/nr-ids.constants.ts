import { NRIdEnum } from '../enums/nr-id.enum';
import { NR } from '../interfaces/nr-id.interface';

/**
 * Lista de NRs.
 */
export const NRS: NR[] = [
  { id: NRIdEnum.NR01, label: "NR01", featured: true },
  { id: NRIdEnum.NR04, label: "NR04" },
  { id: NRIdEnum.NR05, label: "NR05 – CIPA" },
  { id: NRIdEnum.NR06, label: "NR06 – EPI" },
  { id: NRIdEnum.NR10, label: "NR10 – Eletricidade", featured: true },
  { id: NRIdEnum.NR11, label: "NR11 – Transporte" },
  { id: NRIdEnum.NR12, label: "NR12 – Máquinas" },
  { id: NRIdEnum.NR13, label: "NR13 – Caldeiras", featured: true },
  { id: NRIdEnum.NR15, label: "NR15" },
  { id: NRIdEnum.NR17, label: "NR17 – Ergonomia" },
  { id: NRIdEnum.NR18, label: "NR18 – Construção" },
  { id: NRIdEnum.NR20, label: "NR20 – Inflamáveis", featured: true },
  { id: NRIdEnum.NR23, label: "NR23 – Incêndio" },
  { id: NRIdEnum.NR33, label: "NR33 – Espaço Confinado", featured: true },
  { id: NRIdEnum.NR35, label: "NR35 – Trabalho em Altura", featured: true },
  { id: NRIdEnum.ALL, label: "+ Todas as NRs" },
];
