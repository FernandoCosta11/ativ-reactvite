// Projetos exibidos na linha do tempo.
// A ordem aqui não importa: a página ordena pela data (do mais antigo ao mais recente).
//
// date:   'AAAA-MM' (mês de início ou de entrega)
// image:  caminho dentro de /public, ex.: '/projects/xulambs.gif'
//         Enquanto não houver imagem, o site gera uma capa automática.
// repo:   link do repositório no GitHub
//
// TODO: revisar datas, descrições e links; adicionar GIFs em public/projects/.

export const projects = [
  {
    id: 'album',
    date: '2026-03',
    name: 'Custo de produção de álbum',
    description: {
      pt: 'Programa em Java que calcula quantos discos uma gravação ocupa e quanto custa produzir o álbum, somando taxa fixa e custo por unidade. O foco foi resolver a divisão arredondada para cima sem depender de ponto flutuante.',
      en: 'Java program that works out how many discs a recording needs and how much the album costs to produce, adding a fixed fee to a per-unit cost. The focus was doing ceiling division without relying on floating point.',
    },
    tech: ['Java'],
    repo: 'https://github.com/seu-usuario/custo-album',
    image: null,
  },
  {
    id: 'frota',
    date: '2026-05',
    name: 'Frota de veículos',
    description: {
      pt: 'Sistema de gestão de frota modelado com os princípios SOLID: hierarquia de veículos, cálculo de custos por tipo e regras isoladas em classes pequenas e testáveis.',
      en: 'Fleet management system modeled with SOLID principles: a vehicle hierarchy, per-type cost calculation and rules isolated in small, testable classes.',
    },
    tech: ['Java', 'POO', 'SOLID'],
    repo: 'https://github.com/seu-usuario/frota',
    image: null,
  },
  {
    id: 'easyfood',
    date: '2026-08',
    name: 'EasyFood',
    description: {
      pt: 'Modelagem de uma plataforma de delivery: casos de uso, diagrama de classes e diagramas de sequência para os fluxos de pedido e pagamento.',
      en: 'Modeling of a food delivery platform: use cases, class diagram and sequence diagrams for the ordering and payment flows.',
    },
    tech: ['UML', 'draw.io'],
    repo: 'https://github.com/seu-usuario/easyfood',
    image: null,
  },
  {
    id: 'xulambs',
    date: '2026-09',
    name: 'Xulambs Parking',
    description: {
      pt: 'Sistema de gerenciamento de estacionamento feito em Programação Modular. Veículos (carro, moto, van) herdam de uma classe abstrata, vagas têm tamanhos e serviços definidos por enums, planos de cobrança seguem uma interface e o comportamento é coberto por testes com JUnit 5.',
      en: 'Parking management system built for the Modular Programming course. Vehicles (car, motorcycle, van) extend an abstract class, spots have sizes and services defined by enums, billing plans follow an interface and behavior is covered by JUnit 5 tests.',
    },
    tech: ['Java', 'JUnit 5', 'POO'],
    repo: 'https://github.com/seu-usuario/xulambs-parking',
    image: null,
  },
  {
    id: 'portfolio',
    date: '2026-10',
    name: 'Este portfólio',
    description: {
      pt: 'Site pessoal desenvolvido no Laboratório 01 de Desenvolvimento e Integração de Aplicações Web. React com Vite, rotas com React Router, conteúdo em português e inglês e formulário de contato com EmailJS.',
      en: 'Personal website built for Lab 01 of the Web Application Development and Integration course. React with Vite, routing with React Router, content in Portuguese and English and a contact form powered by EmailJS.',
    },
    tech: ['React', 'Vite', 'CSS', 'EmailJS'],
    repo: 'https://github.com/seu-usuario/portfolio',
    image: null,
  },
];
