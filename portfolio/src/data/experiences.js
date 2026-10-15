// Experiências: profissionais, estágios, freelas, open source, eventos e atividades acadêmicas.
//
// type:   'academic' | 'work' | 'event' | 'opensource'
// start / end: 'AAAA-MM' (end: null = atual)
//
// TODO: revisar datas e adicionar novas experiências conforme acontecerem.

export const experiences = [
  {
    id: 'pesquisa',
    type: 'academic',
    org: 'PUC Minas',
    role: {
      pt: 'Projeto de pesquisa: ética no reconhecimento facial',
      en: 'Research project: ethics of facial recognition',
    },
    start: '2026-03',
    end: '2026-07',
    description: {
      pt: 'Pesquisa desenvolvida na disciplina de Introdução à Pesquisa em Informática sobre os riscos e limites do uso de reconhecimento facial. Revisão bibliográfica, artigo em normas ABNT e apresentação para a turma.',
      en: 'Research carried out in the Introduction to Computing Research course on the risks and limits of facial recognition. Literature review, an ABNT-formatted paper and a presentation to the class.',
    },
  },
  {
    id: 'competitiva',
    type: 'academic',
    org: 'AtCoder, Codeforces, LeetCode, SPOJ',
    role: {
      pt: 'Programação competitiva',
      en: 'Competitive programming',
    },
    start: '2026-08',
    end: null,
    description: {
      pt: 'Resolução de problemas como parte da disciplina de desafios de programação, com ênfase em aritmética modular, exponenciação rápida e análise de complexidade.',
      en: 'Problem solving as part of the programming challenges course, focused on modular arithmetic, fast exponentiation and complexity analysis.',
    },
  },
  {
    id: 'engsoft',
    type: 'academic',
    org: 'PUC Minas',
    role: {
      pt: 'Graduação em Engenharia de Software',
      en: 'Software Engineering degree',
    },
    start: '2026-02',
    end: null,
    description: {
      pt: 'Disciplinas cursadas até aqui incluem Programação Modular, Estatística, Introdução à Pesquisa em Informática e Desenvolvimento e Integração de Aplicações Web.',
      en: 'Courses so far include Modular Programming, Statistics, Introduction to Computing Research and Web Application Development and Integration.',
    },
  },
];
