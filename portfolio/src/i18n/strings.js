// Textos fixos da interface, em português e inglês.
export const strings = {
  pt: {
    nav: { about: 'Sobre mim', projects: 'Projetos', experiences: 'Experiências', contact: 'Contato' },
    menu: { open: 'Abrir menu', close: 'Fechar menu' },
    skip: 'Pular para o conteúdo',
    theme: { toDark: 'Usar tema escuro', toLight: 'Usar tema claro' },
    language: 'Idioma',

    about: {
      seeProjects: 'Ver projetos',
      getInTouch: 'Entrar em contato',
      detailsTitle: 'Em poucas linhas',
      skillsTitle: 'Com o que trabalho',
    },

    projects: {
      title: 'Projetos',
      lead: 'Do primeiro programa ao mais recente. Cada ponto da linha é um projeto entregue.',
      filterLabel: 'Filtrar por tecnologia',
      all: 'Todos',
      repo: 'Ver repositório no GitHub',
      techLabel: 'Tecnologias usadas',
      empty: 'Nenhum projeto usa essa tecnologia ainda.',
      count: (n) => (n === 1 ? '1 projeto' : `${n} projetos`),
    },

    experiences: {
      title: 'Experiências',
      lead: 'Atividades acadêmicas, profissionais e eventos de que participei.',
      present: 'atual',
      types: {
        work: 'Profissional',
        academic: 'Acadêmico',
        event: 'Eventos',
        opensource: 'Open source',
      },
    },

    contact: {
      title: 'Contato',
      lead: 'Escolha o canal que preferir ou mande uma mensagem pelo formulário.',
      channelsTitle: 'Canais',
      formTitle: 'Mandar uma mensagem',
      channels: { email: 'E-mail', whatsapp: 'WhatsApp', linkedin: 'LinkedIn', github: 'GitHub' },
      fields: { name: 'Nome', email: 'E-mail', message: 'Mensagem' },
      placeholders: {
        name: 'Como posso te chamar?',
        email: 'voce@exemplo.com',
        message: 'Conte em poucas linhas sobre o que você quer conversar.',
      },
      errors: {
        nameRequired: 'Informe seu nome.',
        nameShort: 'O nome precisa ter pelo menos 2 letras.',
        emailRequired: 'Informe seu e-mail para que eu possa responder.',
        emailInvalid: 'Esse e-mail não parece válido. Confira se tem @ e domínio.',
        messageRequired: 'Escreva sua mensagem.',
        messageShort: 'A mensagem precisa ter pelo menos 10 caracteres.',
      },
      send: 'Enviar mensagem',
      sending: 'Enviando...',
      sent: 'Mensagem enviada. Obrigado pelo contato!',
      failed: 'A mensagem não foi enviada. Tente de novo ou escreva direto para o e-mail ao lado.',
      notConfigured:
        'O envio pelo formulário ainda não foi configurado. Use o e-mail ao lado enquanto isso.',
    },

    footer: { built: 'Feito com React e Vite', source: 'Código-fonte' },
    notFound: {
      title: 'Página não encontrada',
      text: 'Esse endereço não existe neste site. Talvez o link esteja quebrado.',
      back: 'Voltar para o início',
    },
  },

  en: {
    nav: { about: 'About me', projects: 'Projects', experiences: 'Experience', contact: 'Contact' },
    menu: { open: 'Open menu', close: 'Close menu' },
    skip: 'Skip to content',
    theme: { toDark: 'Use dark theme', toLight: 'Use light theme' },
    language: 'Language',

    about: {
      seeProjects: 'See projects',
      getInTouch: 'Get in touch',
      detailsTitle: 'In a few lines',
      skillsTitle: 'What I work with',
    },

    projects: {
      title: 'Projects',
      lead: 'From my first program to the latest one. Each point on the line is a finished project.',
      filterLabel: 'Filter by technology',
      all: 'All',
      repo: 'View repository on GitHub',
      techLabel: 'Technologies used',
      empty: 'No project uses this technology yet.',
      count: (n) => (n === 1 ? '1 project' : `${n} projects`),
    },

    experiences: {
      title: 'Experience',
      lead: "Academic and professional activities, and events I've taken part in.",
      present: 'present',
      types: {
        work: 'Professional',
        academic: 'Academic',
        event: 'Events',
        opensource: 'Open source',
      },
    },

    contact: {
      title: 'Contact',
      lead: 'Pick whichever channel you prefer, or send a message through the form.',
      channelsTitle: 'Channels',
      formTitle: 'Send a message',
      channels: { email: 'Email', whatsapp: 'WhatsApp', linkedin: 'LinkedIn', github: 'GitHub' },
      fields: { name: 'Name', email: 'Email', message: 'Message' },
      placeholders: {
        name: 'What should I call you?',
        email: 'you@example.com',
        message: 'Tell me in a few lines what you would like to talk about.',
      },
      errors: {
        nameRequired: 'Enter your name.',
        nameShort: 'Your name needs at least 2 letters.',
        emailRequired: 'Enter your email so I can reply.',
        emailInvalid: "That email doesn't look valid. Check the @ and the domain.",
        messageRequired: 'Write your message.',
        messageShort: 'The message needs at least 10 characters.',
      },
      send: 'Send message',
      sending: 'Sending...',
      sent: 'Message sent. Thanks for reaching out!',
      failed: "The message wasn't sent. Try again or write directly to the email on the side.",
      notConfigured: "The form isn't set up to send yet. Please use the email on the side for now.",
    },

    footer: { built: 'Built with React and Vite', source: 'Source code' },
    notFound: {
      title: 'Page not found',
      text: "This address doesn't exist on this site. The link may be broken.",
      back: 'Back to the start',
    },
  },
};
