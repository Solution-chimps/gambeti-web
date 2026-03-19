export const CONTACT_MESSAGES = {
  NR13_GERAL: {
    whatsapp: 'Olá, gostaria de solicitar um orçamento de serviços NR-13 (caldeiras, vasos de pressão, tubulações e tanques metálicos).',
    email: `Olá, gostaria de solicitar um orçamento de serviços NR-13:

Serviço:
Equipamento:
Empresa:
CNPJ:
Contato:`
  },

  CALDEIRAS: {
    whatsapp: 'Olá, gostaria de solicitar um orçamento para serviços em caldeiras conforme NR-13.',
    email: `Olá, gostaria de solicitar um orçamento para caldeiras conforme NR-13:

Serviço desejado:
Quantidade de equipamentos:
Localização:
Empresa:
CNPJ:
Contato:`
  },

  SOLDAGEM_CALDEIRAS: {
    whatsapp: 'Olá, gostaria de solicitar um orçamento para soldagem em caldeiras.',
    email: `Olá, gostaria de solicitar um orçamento para soldagem em caldeiras:

Tipo de reparo:
Quantidade:
Localização:
Empresa:
CNPJ:
Contato:`
  },

  VASOS: {
    whatsapp: 'Olá, gostaria de solicitar um orçamento para vasos de pressão conforme NR-13.',
    email: `Olá, gostaria de solicitar um orçamento para vasos de pressão:

Categoria:
Serviço:
Quantidade:
Empresa:
CNPJ:
Contato:`
  },

  SOLDAGEM_VASOS: {
    whatsapp: 'Olá, gostaria de solicitar um orçamento para soldagem em vasos de pressão.',
    email: `Olá, gostaria de solicitar um orçamento para soldagem em vasos de pressão:

Tipo de reparo:
Quantidade:
Empresa:
CNPJ:
Contato:`
  },

  TUBULACOES: {
    whatsapp: 'Olá, gostaria de solicitar um orçamento para tubulações industriais conforme NR-13.',
    email: `Olá, gostaria de solicitar um orçamento para tubulações industriais:

Tipo de fluido:
Serviço:
Extensão aproximada:
Empresa:
CNPJ:
Contato:`
  },

  SOLDAGEM_TUBULACOES: {
    whatsapp: 'Olá, gostaria de solicitar um orçamento para soldagem em tubulações industriais.',
    email: `Olá, gostaria de solicitar um orçamento para soldagem em tubulações:

Tipo de intervenção:
Local:
Empresa:
CNPJ:
Contato:`
  },

  TANQUES: {
    whatsapp: 'Olá, gostaria de solicitar um orçamento para tanques metálicos.',
    email: `Olá, gostaria de solicitar um orçamento para tanques metálicos:

Produto armazenado:
Capacidade:
Serviço:
Empresa:
CNPJ:
Contato:`
  },

  SOLDAGEM_TANQUES: {
    whatsapp: 'Olá, gostaria de solicitar um orçamento para soldagem em tanques metálicos.',
    email: `Olá, gostaria de solicitar um orçamento para soldagem em tanques:

Tipo de reparo:
Capacidade:
Empresa:
CNPJ:
Contato:`
  },

  SOLDAGEM_GERAL: {
    whatsapp: 'Olá, gostaria de solicitar um orçamento para serviços de soldagem em equipamentos NR-13.',
    email: `Olá, gostaria de solicitar um orçamento para serviços de soldagem:

Equipamento:
Tipo de serviço:
Empresa:
CNPJ:
Contato:`
  },

  PRONTUARIO: {
    whatsapp: 'Olá, gostaria de solicitar um orçamento para reconstituição de prontuário conforme NR-13.',
    email: `Olá, gostaria de solicitar um orçamento para reconstituição de prontuário:

Equipamento:
Situação atual:
Empresa:
CNPJ:
Contato:`
  },

  CONTATO_GERAL: {
    whatsapp: 'Olá, gostaria de solicitar um orçamento para a Gambeti Engenharia.',
    email: `Olá, gostaria de solicitar um orçamento:

Serviço:
NR:
Empresa:
CNPJ:
Contato:`
  }
};

export type ContactKey = keyof typeof CONTACT_MESSAGES;
