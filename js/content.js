// Dicionários de conteúdo. Ambos devem ter exatamente as mesmas chaves.
// Textos editoriais seguem a especificação (seções 4 e 5); não inventar conteúdo aqui.

export const LANGS = {
  pt: { htmlLang: 'pt-BR', ogLocale: 'pt_BR' },
  en: { htmlLang: 'en', ogLocale: 'en_US' },
};

export const DEFAULT_LANG = 'pt';

const pt = {
  // Metadados
  'meta.title': 'Maicon Reis — Ruby on Rails Developer | Full Stack Engineer',
  'meta.description': 'Desenvolvedor Full Stack com foco em Ruby on Rails, experiência em aplicações web de produção e desenvolvimento de soluções orientadas a problemas reais.',

  // Acessibilidade e rótulos gerais
  'a11y.skip': 'Pular para o conteúdo',
  'a11y.brand': 'Maicon Reis — início',
  'a11y.mainNav': 'Navegação principal',
  'a11y.langGroup': 'Idioma',
  'a11y.newTab': ' (abre em nova aba)',
  'a11y.heroMeta': 'Disponibilidade e localização',
  'a11y.tech': 'Tecnologias',
  'a11y.mediaPending': 'Espaço reservado: captura de tela pendente',
  'a11y.footerNav': 'Links do rodapé',

  // Navegação
  'nav.menu': 'Menu',
  'nav.about': 'Sobre',
  'nav.stack': 'Stack',
  'nav.projects': 'Projetos',
  'nav.experience': 'Experiência',
  'nav.contact': 'Contato',

  // Hero
  'hero.eyebrow': 'OLÁ, EU SOU MAICON REIS',
  'hero.title1': 'Desenvolvendo software.',
  'hero.title2': 'Resolvendo problemas.',
  'hero.headline': 'Ruby on Rails Developer | Full Stack Engineer',
  'hero.description': 'Desenvolvedor Full Stack com foco em Ruby on Rails, experiência em aplicações web de produção e desenvolvimento de soluções orientadas a problemas reais.',
  'hero.availability': 'Aberto a oportunidades remotas',
  'hero.location': 'Fortaleza, Brasil',
  'hero.ctaPrimary': 'Explorar projetos',
  'hero.ctaSecondary': 'Entrar em contato',

  // Sobre
  'about.title': 'Sobre',
  'about.p1': 'Sou desenvolvedor Full Stack com foco em Ruby on Rails e experiência no desenvolvimento e manutenção de aplicações web.',
  'about.p2': 'Atuei em uma plataforma SaaS de saúde pública utilizada por municípios de diferentes estados brasileiros, contribuindo para a resolução de problemas críticos, otimização de consultas, gerenciamento de cache e funcionalidades em tempo real.',
  'about.p3': 'Também desenvolvo projetos independentes, participando de diferentes etapas do ciclo de desenvolvimento: da implementação à infraestrutura e publicação.',
  'about.p4': 'Valorizo código legível, soluções bem estruturadas, testes automatizados e decisões técnicas orientadas às necessidades reais do produto.',

  // Stack
  'stack.title': 'Stack',
  'stack.backend': 'Backend',
  'stack.frontend': 'Frontend',
  'stack.data': 'Dados',
  'stack.testing': 'Testes',
  'stack.devops': 'DevOps',
  'stack.quality': 'Qualidade e monitoramento',
  'stack.practices': 'Práticas',
  'stack.restApis': 'APIs REST',

  // Projetos
  'projects.title': 'Projetos',
  'projects.additional': 'Projetos complementares',
  'projects.pendingShot': '[PENDENTE] Captura real autorizada',
  'projects.pendingPublicShot': '[PENDENTE] Captura de área pública autorizada',
  'projects.pendingUrl': '[PENDENTE] URL pública',
  'projects.pendingRepo': '[PENDENTE] Repositório autorizado',
  'projects.pendingStackUrl': '[PENDENTE] Stack e URL pública',

  'metropole.category': 'Projeto próprio · Portal de notícias e CMS editorial',
  'metropole.summary': 'Portal de notícias com CMS editorial desenvolvido com Ruby on Rails. Reúne uma aplicação pública e uma área administrativa, com foco em organização de conteúdo, segurança, testes automatizados e infraestrutura de publicação.',

  'frontera.category': 'Projeto para cliente · Desenvolvimento independente · Entregue e publicado',
  'frontera.summary': 'Plataforma digital desenvolvida integralmente de forma independente para apoiar o planejamento de compras na região de fronteira entre Brasil e Paraguai. Implementada com tecnologias web nativas e integração com APIs, está publicada e funcionando em produção.',
  'frontera.vanillaJs': 'JavaScript puro',
  'frontera.note': 'Alguns detalhes técnicos e funcionais são omitidos por obrigações de confidencialidade.',
  'frontera.link': 'Ver site publicado',

  'health.category': 'Experiência profissional',
  'health.summary': 'Contribuições para uma plataforma SaaS multi-tenant de saúde pública, com foco em confiabilidade, desempenho, manutenção e funcionalidades em tempo real.',

  'graos.category': 'Solução comercial',
  'graos.summary': 'Desenvolvimento de uma solução comercial composta por cardápio digital e painel administrativo.',

  // Experiência
  'experience.title': 'Experiência',
  'nobe.dates': 'Mar 2025 – Jul 2026',
  'nobe.role': 'Desenvolvedor Full Stack',
  'nobe.badge': 'PJ',
  'nobe.desc': 'Atuação no desenvolvimento e manutenção de uma plataforma SaaS de saúde pública, com foco em resolução de problemas críticos, otimização de consultas SQL, estratégias de cache, funcionalidades em tempo real, testes automatizados e confiabilidade em produção.',
  'corpvs.dates': 'Mar 2024 – Mar 2025',
  'corpvs.role': 'Manutenção de sistemas de segurança',
  'corpvs.desc': 'Atuação na manutenção de sistemas eletrônicos de segurança, com responsabilidades de coordenação de rotinas preventivas e corretivas, diagnóstico técnico e orientação de novos profissionais.',

  // Formação
  'education.title': 'Formação',
  'education.degree': 'Bacharelado em Engenharia da Computação',
  'education.degreeMeta': 'Uniamérica Descomplica · Em andamento · Conclusão prevista em julho de 2029',
  'education.course': 'Ruby on Rails 5.x — Do início ao fim!',
  'education.courseMeta': 'Udemy · 48 horas',

  // Contato
  'contact.title': 'Contato',
  'contact.lead': 'Vamos conversar sobre oportunidades e projetos de desenvolvimento de software.',
  'contact.resume': 'Currículo',
  'contact.resumePending': '[PENDENTE] PDF revisado',

  // Rodapé
  'footer.email': 'E-mail',
};

const en = {
  'meta.title': 'Maicon Reis — Ruby on Rails Developer | Full Stack Engineer',
  'meta.description': 'Full Stack Developer focused on Ruby on Rails, with experience building and maintaining production web applications and delivering solutions to real-world problems.',

  'a11y.skip': 'Skip to content',
  'a11y.brand': 'Maicon Reis — home',
  'a11y.mainNav': 'Main navigation',
  'a11y.langGroup': 'Language',
  'a11y.newTab': ' (opens in a new tab)',
  'a11y.heroMeta': 'Availability and location',
  'a11y.tech': 'Technologies',
  'a11y.mediaPending': 'Placeholder: screenshot pending',
  'a11y.footerNav': 'Footer links',

  'nav.menu': 'Menu',
  'nav.about': 'About',
  'nav.stack': 'Stack',
  'nav.projects': 'Projects',
  'nav.experience': 'Experience',
  'nav.contact': 'Contact',

  'hero.eyebrow': "HI, I'M MAICON REIS",
  'hero.title1': 'Building software.',
  'hero.title2': 'Solving problems.',
  'hero.headline': 'Ruby on Rails Developer | Full Stack Engineer',
  'hero.description': 'Full Stack Developer focused on Ruby on Rails, with experience building and maintaining production web applications and delivering solutions to real-world problems.',
  'hero.availability': 'Open to remote opportunities',
  'hero.location': 'Fortaleza, Brazil',
  'hero.ctaPrimary': 'Explore projects',
  'hero.ctaSecondary': 'Get in touch',

  'about.title': 'About',
  'about.p1': "I'm a Full Stack Developer focused on Ruby on Rails, with experience building and maintaining web applications.",
  'about.p2': 'I worked on a public healthcare SaaS platform used by municipalities across multiple Brazilian states, contributing to critical bug fixes, query optimization, caching strategies, and real-time features.',
  'about.p3': 'I also build independent projects, working across different stages of the development lifecycle — from implementation to infrastructure and deployment.',
  'about.p4': 'I value readable code, well-structured solutions, automated testing, and technical decisions driven by real product needs.',

  'stack.title': 'Technical stack',
  'stack.backend': 'Backend',
  'stack.frontend': 'Frontend',
  'stack.data': 'Data',
  'stack.testing': 'Testing',
  'stack.devops': 'DevOps',
  'stack.quality': 'Quality & monitoring',
  'stack.practices': 'Practices',
  'stack.restApis': 'REST APIs',

  'projects.title': 'Projects',
  'projects.additional': 'Additional projects',
  'projects.pendingShot': '[PENDING] Authorized real screenshot',
  'projects.pendingPublicShot': '[PENDING] Authorized screenshot of public area',
  'projects.pendingUrl': '[PENDING] Public URL',
  'projects.pendingRepo': '[PENDING] Authorized repository',
  'projects.pendingStackUrl': '[PENDING] Stack and public URL',

  'metropole.category': 'Personal project · News portal and editorial CMS',
  'metropole.summary': 'A news portal with an editorial CMS built with Ruby on Rails. The project combines a public-facing website and an administrative interface, with a focus on content management, security, automated testing, and deployment infrastructure.',

  'frontera.category': 'Client project · Independently developed · Delivered and live',
  'frontera.summary': 'A digital platform independently developed end-to-end to support shopping planning in the border region between Brazil and Paraguay. Built with native web technologies and API integrations, the platform is publicly deployed and running in production.',
  'frontera.vanillaJs': 'Vanilla JavaScript',
  'frontera.note': 'Some functional and technical details are omitted due to confidentiality obligations.',
  'frontera.link': 'Visit live website',

  'health.category': 'Professional experience',
  'health.summary': 'Contributions to a multi-tenant public healthcare SaaS platform, focusing on reliability, performance, maintenance, and real-time features.',

  'graos.category': 'Commercial solution',
  'graos.summary': 'Development of a commercial solution featuring a digital menu and an administrative panel.',

  'experience.title': 'Experience',
  'nobe.dates': 'Mar 2025 – Jul 2026',
  'nobe.role': 'Full Stack Developer',
  'nobe.badge': 'Contractor',
  'nobe.desc': 'Worked on the development and maintenance of a public healthcare SaaS platform, focusing on critical bug fixes, SQL query optimization, caching strategies, real-time features, automated testing, and production reliability.',
  'corpvs.dates': 'Mar 2024 – Mar 2025',
  'corpvs.role': 'Security Systems Maintenance',
  'corpvs.desc': 'Worked with electronic security systems maintenance, coordinating preventive and corrective routines, troubleshooting technical issues, and supporting the training of new team members.',

  'education.title': 'Education',
  'education.degree': 'B.Sc. in Computer Engineering',
  'education.degreeMeta': 'Uniamérica Descomplica · In progress · Expected graduation July 2029',
  'education.course': 'Ruby on Rails 5.x — From Start to Finish',
  'education.courseMeta': 'Udemy · 48 hours',

  'contact.title': 'Contact',
  'contact.lead': "Let's talk about software development opportunities and projects.",
  'contact.resume': 'Résumé',
  'contact.resumePending': '[PENDING] Reviewed PDF',

  'footer.email': 'Email',
};

export const DICTIONARIES = { pt, en };
