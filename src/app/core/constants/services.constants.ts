import { ServiceOptionId } from '../enums/service.enum';
import { SelectOption } from '../models/select-option.modal';

export const SERVICES = [
  { name: 'NR13 — Caldeiras e Vasos de Pressão', id: ServiceOptionId.NR13 },
  { name: 'NR10 — Engenharia Elétrica', id: ServiceOptionId.NR10 },
  { name: 'NR20 — Inflamáveis e Combustíveis', id: ServiceOptionId.NR20 },
  { name: 'Treinamentos NR', id: ServiceOptionId.TREINAMENTOS },
  { name: 'eSocial SST', id: ServiceOptionId.ESOCIAL },
  { name: 'Engenharia Civil', id: ServiceOptionId.CIVIL },
  { name: 'Outro', id: ServiceOptionId.OUTRO }
];


export const SERVICES_OPTIONS = SERVICES.map(service => new SelectOption(service.name, service.id))
