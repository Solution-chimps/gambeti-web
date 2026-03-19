import { FaqTypeEnum } from '../enums/faq-type.enum';
import { FaqTypeItem } from '../interfaces/faq-type.interface';

export const FAQ_TYPE: FaqTypeItem[] = [
  {
    question: 'Quais equipamentos são abrangidos pela NR-13?',
    answer: 'A NR-13 abrange caldeiras a vapor (equipamentos destinados a produzir e acumular vapor sob pressão superior à atmosférica), vasos de pressão (autoclaves, compressores, trocadores de calor, separadores, reservatórios de amônia, entre outros), tubulações industriais e tanques metálicos de armazenamento.',
    type: FaqTypeEnum.EQUIPAMENTOS
  },
  {
    question: 'Qual a periodicidade das inspeções de caldeiras?',
    answer: 'As caldeiras são classificadas em Categoria A (pressão de operação ≥ 1960 kPa) e Categoria B (pressão de operação &lt; 1960 kPa com volume &gt; 50 litros). Para ambas as categorias, os prazos de inspeção periódica (interna e externa) são estabelecidos a partir de 12 meses, podendo ser ampliados conforme avaliação técnica do Profissional Legalmente Habilitado (PLH). O PLH define o intervalo adequado considerando o histórico operacional, estado de conservação, mecanismos de deterioração e resultados de inspeções anteriores.',
    type: FaqTypeEnum.INSPECAO
  },
  {
    question: 'O que é o teste hidrostático e quando é obrigatório?',
    answer: 'O teste hidrostático (TH) é um ensaio de pressão realizado com líquido (geralmente água) para verificar a integridade estrutural e a estanqueidade do equipamento. É obrigatório na inspeção inicial, após reparos por soldagem que afetem partes pressurizadas, após alteração de PMTA ou quando o inspetor julgar necessário.',
    type: FaqTypeEnum.TESTES
  },
  {
    question: 'Quem pode realizar inspeção NR-13?',
    answer: 'A inspeção deve ser realizada por Profissional Legalmente Habilitado (PLH) — engenheiro com atribuição legal para atividades de inspeção de equipamentos pressurizados, devidamente registrado no CREA e com emissão de ART. A Gambeti possui engenheiros habilitados e registrados (CREA nº 2475417-SP).',
    type: FaqTypeEnum.PROFISSIONAL
  },
  {
    question: 'É obrigatório calibrar manômetros, pressostatos e válvulas de segurança?',
    answer: 'Sim. A NR-13 exige que os dispositivos de segurança (manômetros, pressostatos e válvulas de segurança/PSV) estejam calibrados e em perfeito funcionamento. Os manômetros devem ter calibração periódica com padrão rastreável ao INMETRO. Os pressostatos devem ter seus set points verificados. As válvulas de segurança devem ser testadas (pop test) para garantir abertura na pressão correta. A não conformidade desses dispositivos pode resultar em interdição do equipamento.',
    type: FaqTypeEnum.SEGURANCA
  },
  {
    question: 'A soldagem em equipamentos NR-13 precisa ser qualificada?',
    answer: 'Sim. Toda soldagem realizada em caldeiras, vasos de pressão, tubulações e tanques deve seguir procedimentos qualificados (EPS/RQPS) conforme ASME Section IX ou norma equivalente, e ser executada por soldadores qualificados. Após a soldagem, o equipamento deve passar por inspeção de segurança extraordinária.',
    type: FaqTypeEnum.SOLDAGEM
  },
  {
    question: 'O que acontece se a inspeção estiver vencida?',
    answer: 'O equipamento com inspeção vencida está em desconformidade com a NR-13 e deve ser retirado de operação imediatamente até que uma nova inspeção seja realizada. O descumprimento pode gerar autuação pelo MTE, interdição do equipamento, multas e responsabilização civil e criminal do proprietário.',
    type: FaqTypeEnum.INSPECAO
  },
  {
    question: 'A Gambeti reconstitui prontuários de equipamentos antigos?',
    answer: 'Sim. Reconstituímos prontuários de caldeiras, vasos de pressão, tubulações e tanques que não possuem documentação de fabricação ou cujo prontuário está incompleto. O processo inclui levantamento dimensional, identificação de materiais, cálculos de PMTA, inspeção completa e elaboração de toda a documentação exigida pela NR-13.',
    type: FaqTypeEnum.DOCUMENTACAO
  }
];
