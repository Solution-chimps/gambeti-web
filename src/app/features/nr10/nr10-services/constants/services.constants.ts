export interface ServiceItem {
  id: string;
  name: string;
}

export const SERVICES_LIST: ServiceItem[] = [
  { id: 'laudo-eletrico', name: 'Laudo Elétrico' },
  { id: 'laudo-spda', name: 'Laudo SPDA' },
  { id: 'termografia', name: 'Termografia' },
  { id: 'diagrama-unifilar', name: 'Diagrama Unifilar' },
  { id: 'procedimentos', name: 'Procedimentos' },
  { id: 'aterramento', name: 'Aterramento' }
];
