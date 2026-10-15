// Dados pessoais exibidos no site.
// Tudo que está marcado com TODO precisa ser revisado/preenchido por você.
// Campos com { pt, en } são traduzidos automaticamente pelo seletor de idioma.

export const profile = {
  name: 'Fernando', // TODO: nome completo
  location: { pt: 'Minas Gerais, Brasil', en: 'Minas Gerais, Brazil' },

  role: {
    pt: 'Estudante de Engenharia de Software',
    en: 'Software Engineering student',
  },

  intro: {
    pt: 'Estou no 2º período de Engenharia de Software na PUC Minas. Gosto de entender por que uma solução funciona antes de escrever a primeira linha, e é isso que tento levar para cada projeto: código enxuto, bem modelado e fácil de manter.',
    en: "I'm in my second semester of Software Engineering at PUC Minas. I like to understand why a solution works before writing the first line, and that's what I try to bring to every project: lean, well-modeled code that is easy to maintain.",
  },

  // Blocos da seção "Sobre Mim"
  details: [
    {
      label: { pt: 'Formação', en: 'Education' },
      text: {
        pt: 'Bacharelado em Engenharia de Software, Pontifícia Universidade Católica de Minas Gerais. Ingresso em 2026, conclusão prevista para 2029.', // TODO: confirmar datas
        en: 'B.Sc. in Software Engineering, Pontifical Catholic University of Minas Gerais. Started in 2026, expected to finish in 2029.',
      },
    },
    {
      label: { pt: 'Área de atuação', en: 'Focus' },
      text: {
        pt: 'Desenvolvimento back-end com Java e orientação a objetos, começando agora a construir aplicações web com React.',
        en: 'Back-end development with Java and object-oriented design, now starting to build web applications with React.',
      },
    },
    {
      label: { pt: 'Interesses', en: 'Interests' },
      text: {
        pt: 'Modelagem de sistemas, padrões de projeto, algoritmos e análise de complexidade, programação competitiva.',
        en: 'System modeling, design patterns, algorithms and complexity analysis, competitive programming.',
      },
    },
    {
      label: { pt: 'Objetivos', en: 'Goals' },
      text: {
        pt: 'Conseguir um primeiro estágio em desenvolvimento e aprender, em um time real, como software é construído e mantido ao longo do tempo.',
        en: 'Land a first development internship and learn, on a real team, how software is built and maintained over time.',
      },
    },
  ],

  skills: [
    { group: { pt: 'Linguagens', en: 'Languages' }, items: ['Java', 'JavaScript', 'HTML', 'CSS'] },
    { group: { pt: 'Ferramentas', en: 'Tools' }, items: ['Git', 'GitHub', 'JUnit 5', 'VS Code', 'draw.io'] },
    { group: { pt: 'Em estudo', en: 'Learning' }, items: ['React', 'Vite', 'SQL'] },
  ],

  // Canais exibidos na página de contato.
  // TODO: substitua os usuários e o número pelos seus.
  contacts: {
    email: 'fernandocossta11@gmail.com',
    whatsapp: '5531999999999', // formato internacional, só números
    linkedin: 'https://www.linkedin.com/in/seu-usuario',
    github: 'https://github.com/seu-usuario',
  },
};
