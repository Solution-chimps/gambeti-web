export interface ChecklistItem {
  title: string;
  description: string;
}

export interface InfoCard {
  title: string;
  content: string;
  tag?: string;
  tagType?: string;
  tags?: string[];
}

export interface ServiceContent {
  title: string;
  description: string;
  description2?: string;
  checklist: ChecklistItem[];
  infoCards: InfoCard[];
}

export const SERVICES_CONTENT: { [key: string]: ServiceContent } = {
  // ==================== LAUDO ELÉTRICO ====================
  'laudo-eletrico': {
    title: 'Laudo das Instalações Elétricas',
    description: `O <strong class="highlight-text">Laudo das Instalações Elétricas de Baixa Tensão</strong> é o <strong class="doc-text">documento técnico</strong> que atesta a conformidade (ou não conformidade) das instalações elétricas com a <strong>ABNT NBR 5410:2004</strong>. O laudo é <strong class="plh-text">elaborado por Profissional Legalmente Habilitado (PLH)</strong> mediante inspeção visual detalhada, ensaios e medições, verificando todos os <strong class="security-text">aspectos de segurança</strong> previstos na norma.`,
    description2: `<strong class="obrigatory-text">Este laudo é componente obrigatório do PIE e deve ser atualizado periodicamente ou sempre que houver alterações significativas na instalação elétrica.</strong>`,
    checklist: [
      { title: 'Inspeção Visual Completa', description: 'verificação de quadros, painéis, circuitos, proteções, eletrodutos, conexões, identificações e estado geral da instalação.' },
      { title: 'Medição de Resistência de Isolamento', description: 'verificação do isolamento de condutores e circuitos com megohmetro.' },
      { title: 'Verificação de Continuidade dos Condutores de Proteção', description: 'teste de continuidade do sistema de aterramento (PE).' },
      { title: 'Teste de Dispositivos DR (Diferencial Residual)', description: 'verificação do tempo e corrente de atuação dos dispositivos de proteção contra choques.' },
      { title: 'Medição de Resistência de Aterramento', description: 'determinação da resistência da malha de aterramento.' },
      { title: 'Verificação de Dimensionamento', description: 'análise de condutores, disjuntores, cabos e demanda versus capacidade instalada.' },
      { title: 'Verificação de Sinalização e Identificação', description: 'placas de advertência, identificação de circuitos, quadros e componentes.' },
      { title: 'Verificação de Esquema de Aterramento', description: 'análise do esquema adotado (TN-S, TN-C-S, TT, IT) e sua conformidade.' },
      { title: 'Verificação de Proteção contra Incêndio', description: 'seletividade, coordenação de proteções e proteção contra sobrecorrentes.' },
      { title: 'Emissão de Laudo com ART', description: 'relatório fotográfico detalhado com recomendações, não conformidades e ART.' }
    ],
    infoCards: [
      { title: 'ABNT NBR 5410:2004', content: 'Norma brasileira que estabelece as condições mínimas que as instalações elétricas de baixa tensão devem satisfazer para garantir a segurança de pessoas, animais e bens, e funcionamento adequado e a conservação. Abrange instalações com tensão nominal até 1000 V em corrente alternada (CA) e até 1500 V em corrente contínua (CC).', tag: 'Norma de Referência' },
      { title: 'Não Conformidades Comuns', content: 'Falta de DR, ausência de aterramento, condutores subdimensionados, emendas expostas, quadros sem identificação, disjuntores mal dimensionados, falta de proteção contra surtos (DPS), instalações em desacordo com o esquema de aterramento.', tag: 'Riscos Críticos', tagType: 'warning' },
      { title: 'Periodicidade Recomendada', content: 'Embora a NR-10 não defina prazo fixo, recomenda-se a atualização do laudo a cada 1 a 3 anos ou sempre que houver modificações na instalação, mudanças de uso, ampliação de carga ou após acidentes elétricos.', tag: '1 a 3 anos', tagType: 'highlight' },
      { title: 'Base Normativa e Legal', content: 'O laudo é fundamental no NR-10 (item 10.2.4), ABNT NBR 5410:2004, ABNT NBR 5419 (quando aplicável), e Resolução CONFEA nº 218/73 que regulamenta as atribuições do engenheiro elétrico.', tags: ['NR-10', 'NBR 5410:2004', 'CONFEA 218/73'] }
    ]
  },

  // ==================== LAUDO SPDA ====================
  'laudo-spda': {
    title: 'Laudo do SPDA',
    description: `O <strong class="highlight-text">Laudo do Sistema de Proteção contra Descargas Atmosféricas (SPDA)</strong> é o <strong class="doc-text">documento técnico</strong> que atesta a conformidade (ou necessidade) do sistema de proteção contra raios, conforme a <strong>ABNT NBR 5419:2015</strong> (partes 1 a 4). O laudo inclui a <strong class="security-text">avaliação de risco (gerenciamento de risco)</strong>, inspeção visual e medições elétricas do sistema existente.`,
    description2: `A <strong>NBR 5419</strong> é composta por quatro partes: <strong>Parte 1</strong> — Princípios gerais; <strong>Parte 2</strong> — Gerenciamento de risco; <strong>Parte 3</strong> — Danos físicos e estruturais e perigos à vida; <strong>Parte 4</strong> — Sistemas elétricos e eletrônicos internos na estrutura. <strong class="obrigatory-text">O laudo SPDA é obrigatório para edificações de acordo com a NBR 5419 e deve ser atualizado conforme a periodicidade definida pela norma.</strong>`,
    checklist: [
      { title: 'Gerenciamento de Risco (Parte 2)', description: 'cálculo do risco de acordo com a NBR 5419-2 para determinar a necessidade e o nível de proteção do SPDA.' },
      { title: 'Inspeção Visual do SPDA', description: 'verificação de captores, descidas, conexões, fixações, estado de conservação e integridade do sistema.' },
      { title: 'Medição de Resistência de Aterramento', description: 'medição da resistência ôhmica do sistema de aterramento do SPDA com terrômetro.' },
      { title: 'Verificação de Continuidade Elétrica', description: 'teste de continuidade elétrica entre captores, condutores de descida e sistema de aterramento.' },
      { title: 'Verificação de DPS (Dispositivos de Proteção contra Surtos)', description: 'análise da proteção contra surtos nos quadros elétricos (Parte 4).' },
      { title: 'Verificação de Distâncias de Segurança', description: 'cálculo e verificação das distâncias de segurança entre o SPDA e as instalações metálicas.' },
      { title: 'Emissão de Laudo com ART', description: 'relatório fotográfico completo com recomendações e Anotação de Responsabilidade Técnica.' }
    ],
    infoCards: [
      { title: 'ABNT NBR 5419:2015', content: 'A norma brasileira de proteção contra descargas atmosféricas é dividida em quatro partes complementares que abordam desde os princípios gerais até a proteção de sistemas eletrônicos internos. O gerenciamento de risco (Parte 2) é o ponto de partida para determinar se o SPDA é necessário e qual o nível de proteção requerido.', tag: 'Partes 1-4' },
      { title: 'Periodicidade', content: 'A NBR 5419 estabelece que a inspeção do SPDA deve ser realizada periodicamente: a cada 1 ano para nível de proteção I e II, e a cada 3 anos para nível III e IV. A inspeção visual deve ser feita anualmente.', tag: 'Inspeção Anual', tagType: 'highlight' },
      { title: 'Níveis de Proteção', content: 'Nível I — Máxima proteção (98%). Nível II — Alta proteção (95%). Nível III — Proteção padrão (90%). Nível IV — Proteção básica (80%). O nível é determinado pelo gerenciamento de risco.', tag: 'Gerenciamento de Risco' }
    ]
  },

  // ==================== TERMOGRAFIA ====================
  'termografia': {
    title: 'Inspeção por Termografia',
    description: `A <strong class="highlight-text">inspeção termográfica</strong> é uma <strong class="doc-text">técnica de ensaio não destrutivo</strong> que utiliza câmera de infravermelho para detectar <strong class="security-text">anomalias térmicas</strong> em instalações elétricas. Permite identificar pontos de sobreaquecimento causados por mau contato, sobrecarga, desbalanceamento de fases, harmônicos e deterioração de componentes — antes que ocorram falhas, incêndios ou acidentes.`,
    description2: `A termografia é <strong class="obrigatory-text">componente recomendado do PIE e constitui uma ferramenta essencial de manutenção preditiva</strong>, sendo exigida por diversas seguradoras e normas técnicas.`,
    checklist: [
      { title: 'Inspeção Termográfica de Painéis e Quadros', description: 'varredura com câmera infravermelha de todos os quadros de distribuição, CCMs, painéis de força e comando.' },
      { title: 'Inspeção Termográfica de Transformadores', description: 'verificação de temperatura de buchas, conexões, radiadores e corpo do transformador.' },
      { title: 'Inspeção Termográfica de Barramentos', description: 'detecção de sobreaquecimento em barramentos, conexões aparafusadas e emendas.' },
      { title: 'Inspeção Termográfica de Motores e Equipamentos', description: 'verificação de temperatura de mancais, acoplamentos e enrolamentos.' },
      { title: 'Classificação de Anomalias', description: 'categorização das anomalias em níveis de severidade conforme critérios normalizados (ΔT).' },
      { title: 'Relatório Termográfico com Imagens', description: 'imagens térmicas e visuais lado a lado, com temperatura, emissividade e recomendações.' },
      { title: 'Emissão com ART', description: 'relatório técnico assinado por Profissional Legalmente Habilitado com ART.' }
    ],
    infoCards: [
      { title: 'Classificação por ΔT', content: 'ΔT até 10°C: monitorar. ΔT 10°C a 25°C: programar reparo. ΔT 25°C a 40°C: reparo urgente. ΔT acima de 40°C: emergência — risco iminente de incêndio ou falha catastrófica.', tag: 'Critério de Severidade', tagType: 'warning' },
      { title: 'Benefícios', content: 'Prevenção de incêndios, redução de paradas não programadas, aumento da vida útil dos equipamentos, redução de custos com manutenção corretiva e atendimento a exigências de seguradoras.', tag: 'Manutenção Preditiva', tagType: 'highlight' }
    ]
  },

  // ==================== DIAGRAMA UNIFILAR ====================
  'diagrama-unifilar': {
    title: 'Diagrama Unifilar',
    description: `O <strong class="highlight-text">diagrama unifilar</strong> é a <strong class="doc-text">representação gráfica simplificada</strong> de toda a instalação elétrica, mostrando os componentes principais (transformadores, quadros, circuitos, proteções, cargas) e suas interligações. É <strong class="security-text">documento obrigatório do PIE</strong> e fundamental para a operação segura, manutenção e análise da instalação.`,
    description2: `<strong class="obrigatory-text">A NR-10 exige que o diagrama unifilar esteja atualizado e acessível aos trabalhadores envolvidos nas instalações elétricas. Qualquer alteração na instalação deve ser refletida no diagrama.</strong>`,
    checklist: [
      { title: 'Levantamento em Campo', description: 'levantamento completo da instalação existente, identificando todos os circuitos, proteções e cargas.' },
      { title: 'Desenho do Diagrama Unifilar Geral', description: 'desde a entrada de energia (medição) até os quadros de distribuição finais.' },
      { title: 'Detalhamento de Quadros', description: 'diagrama individual de cada quadro com identificação de disjuntores, circuitos, bitolas, DRs e DPS.' },
      { title: 'Identificação Completa', description: 'bitola dos condutores, corrente dos disjuntores, corrente de curto-circuito presumida, capacidade dos transformadores.' },
      { title: 'Formato CAD', description: 'desenhos em formato digital (DWG/PDF) para fácil consulta e atualização futura.' },
      { title: 'Emissão com ART', description: 'desenhos assinados pelo engenheiro responsável com ART.' }
    ],
    infoCards: [
      { title: 'Representação Completa da Instalação', content: 'Do ponto de entrada até a última tomada — cada circuito, proteção e carga identificados e documentados.', tag: 'Entrada → Transformador → QGST → Disjuntores → Circuitos → Cargas' },
      { title: 'Diagrama Desatualizado?', content: 'Um diagrama unifilar desatualizado pode levar a erros de manobra, acidentes, dimensionamento incorreto de proteções e dificuldade de manutenção. A NR-10 exige que esteja sempre atualizado.', tag: 'Risco', tagType: 'warning' },
      { title: 'Atualização Contínua', content: 'Sempre que houver modificação na instalação (ampliação, mudança de carga, instalação de novos equipamentos), o diagrama unifilar deve ser atualizado pelo PLH.', tag: 'Obrigatório NR-10', tagType: 'highlight' }
    ]
  },

  // ==================== PROCEDIMENTOS ====================
  'procedimentos': {
    title: 'Procedimentos de Trabalho',
    description: `A <strong>NR-10</strong> exige que a empresa possua <strong class="doc-text">procedimentos de trabalho documentados</strong> para todas as atividades relacionadas a instalações elétricas. Esses procedimentos devem ser <strong class="security-text">claros, objetivos e acessíveis</strong> a todos os trabalhadores envolvidos.`,
    description2: `<strong class="obrigatory-text">A Gambeti elabora todos os procedimentos exigidos, personalizados para a realidade da sua instalação, garantindo conformidade com a NR-10 e segurança operacional.</strong>`,
    checklist: [
      { title: 'Desenergização', description: 'Procedimento detalhado com as etapas obrigatórias: seccionamento, impedimento de reenergização, constatação de ausência de tensão, instalação de aterramento temporário, proteção dos elementos energizados e sinalização.' },
      { title: 'Reenergização', description: 'Procedimento reverso da desenergização com verificação de segurança antes da reenergização: retirada de ferramentas, equipamentos e aterramento temporário, contagem de pessoal e comunicação.' },
      { title: 'Trabalho em Proximidade', description: 'Procedimentos para atividades realizadas nas proximidades de instalações energizadas, com definição de zonas de risco (zona livre, zona controlada e zona de risco) e medidas de controle.' },
      { title: 'Trabalho com Tensão', description: 'Procedimentos específicos para trabalhos em instalações energizadas: ao contato, à distância e ao potencial. Requisitos de treinamento, equipamentos e supervisão.' },
      { title: 'Emergência e Resgate', description: 'Procedimentos de emergência em caso de acidente elétrico: primeiros socorros, resgate de vítima em contato com parte energizada, combate à incêndio de origem elétrica e comunicação de emergência.' },
      { title: 'Bloqueio e Etiquetagem (LOTO)', description: 'Procedimento de Lock Out / Tag Out para garantir que o equipamento permaneça desenergizado durante a manutenção. Definição de responsabilidades, dispositivos de bloqueio e etiquetas padronizadas.' }
    ],
    infoCards: [
      { title: 'Especificação de EPI e EPC', content: 'Além dos procedimentos, o PIE deve conter a especificação completa dos Equipamentos de Proteção Individual (EPI) e Equipamentos de Proteção Coletiva (EPC) necessários para cada atividade: luvas isolantes (classe conforme tensão), calçados de segurança, capacete classe B, óculos, vestimenta antichama (quando aplicável), mantas isolantes, bastões de manobra, detectores de tensão, aterramento temporário, sinalização e barreiras de proteção.', tags: ['NR-6', 'NR-10', 'NBR 10622', 'IEC 61482'] }
    ]
  },

  // ==================== ATERRAMENTO ====================
  'aterramento': {
    title: 'Sistema de Aterramento',
    description: `O <strong class="highlight-text">sistema de aterramento</strong> é <strong class="security-text">fundamental para a segurança de pessoas e equipamentos</strong>. Ele garante o escoamento de correntes de falta, descargas atmosféricas e surtos, além de ser referência de potencial para o sistema elétrico.`,
    description2: `<strong class="obrigatory-text">A NR-10 e a NBR 5410 exigem que o aterramento seja adequado, medido e documentado.</strong> A Gambeti realiza a inspeção, medição e elaboração de laudos completos do sistema de aterramento, garantindo a conformidade com as normas vigentes.`,
    checklist: [
      { title: 'Inspeção Visual do Sistema de Aterramento', description: 'Verificação completa de hastes, conexões, cabos, caixas de inspeção e estado geral de conservação do sistema.' },
      { title: 'Medição de Resistência de Aterramento', description: 'Medição com terrômetro para verificar a resistência ôhmica do sistema de aterramento.' },
      { title: 'Teste de Continuidade do Condutor de Proteção', description: 'Verificação da continuidade elétrica dos condutores de proteção (PE) em toda a instalação.' },
      { title: 'Medição de Resistividade do Solo', description: 'Análise da resistividade do solo para dimensionamento adequado do sistema de aterramento.' },
      { title: 'Projeto de Aterramento', description: 'Elaboração de projeto completo para adequação ou implantação do sistema de aterramento.' },
      { title: 'Laudo com ART', description: 'Documento técnico completo com todas as medições, verificações e recomendações, assinado por profissional habilitado com ART.' }
    ],
    infoCards: [
      { title: 'Valores de Referência', content: 'A NBR 5410 não define um valor máximo fixo de resistência de aterramento, mas exige que o esquema de aterramento (TN, TT ou IT) funcione adequadamente. Para esquema TT, recomenda-se que R × Ia ≤ 50V. Para SPDA (NBR 5419), o valor de referência é ≤ 10 Ω.', tag: 'Critérios Normativos' },
      { title: 'Equipotencialização', content: 'Todas as massas metálicas, carcaças de equipamentos, estruturas metálicas e partes condutoras estranhas devem ser interligadas ao sistema de aterramento (equalização de potenciais), prevenindo tensões de toque e passos perigosos.', tag: 'Segurança', tagType: 'highlight' },
      { title: 'Adequação e Reforma', content: 'Quando o sistema existente não atende aos requisitos normativos, realizamos o projeto e execução da adequação: instalação de novas hastes, substituição de conexões corroídas, implantação de malha e equalização.', tag: 'Execução' }
    ]
  }
};
