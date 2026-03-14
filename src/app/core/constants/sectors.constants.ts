import { SectorIdEnum } from '../enums/sector-id.enum';
import { Sector } from '../interfaces/sector-id.interface';

/**
 * Lista de setores disponíveis.
 */
export const SECTORS: Sector[] = [
  { id: SectorIdEnum.INDUSTRIA, icon: "fas fa-industry", label: "Indústria" },
  { id: SectorIdEnum.PETROQUIMICA, icon: "fas fa-oil-well", label: "Petroquímica" },
  { id: SectorIdEnum.LOGISTICA, icon: "fas fa-warehouse", label: "Logística" },
  { id: SectorIdEnum.CONSTRUCAO, icon: "fas fa-building", label: "Construção" },
  { id: SectorIdEnum.COMBUSTIVEL, icon: "fas fa-gas-pump", label: "Combustível" },
  { id: SectorIdEnum.ALIMENTICIO, icon: "fas fa-utensils", label: "Alimentício" },
  { id: SectorIdEnum.AGRONEGOCIO, icon: "fas fa-wheat-awn", label: "Agronegócio" },
  { id: SectorIdEnum.HOSPITALAR, icon: "fas fa-hospital", label: "Hospitalar" },
  { id: SectorIdEnum.ENERGIA, icon: "fas fa-bolt", label: "Energia" },
  { id: SectorIdEnum.VAREJO, icon: "fas fa-cart-shopping", label: "Varejo" },
  { id: SectorIdEnum.QUIMICA, icon: "fas fa-flask", label: "Química" },
  { id: SectorIdEnum.METALURGIA, icon: "fas fa-gears", label: "Metalurgia" },
];
