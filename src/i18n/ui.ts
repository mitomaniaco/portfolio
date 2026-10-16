export type Lang = 'pt' | 'en';
export const langs: Lang[] = ['pt', 'en'];
export const cvFile: Record<Lang, string> = { pt: '/curriculo-caio-augusto.pdf', en: '/resume-caio-augusto-en.pdf' };
export const home: Record<Lang, string> = { pt: '/', en: '/en/' };

const pt = {
  htmlLang: 'pt-BR',
  title: 'Caio Augusto · Design, vídeo e desenvolvimento',
  description: 'Portfólio de Caio Augusto: social media, sites e o sistema interno Nobre Hub. Designer, editor de vídeo e desenvolvedor.',
  nav: { label: 'Seções', social: 'Social media', sites: 'Sites', hub: 'Sistema', about: 'Sobre', contact: 'Contato', cv: 'Currículo', cvFull: 'Baixar currículo', open: 'Abrir menu', close: 'Fechar menu', switchTo: 'Mudar para inglês', switchShort: 'EN' },
  hero: {
    r: ['Designer', 'editor de vídeo', 'desenvolvedor'], and: 'e',
    pre: 'Dou forma à identidade de cada marca em', w: ['posts', 'vídeos', 'sites', 'sistemas'], hint: 'Passe o mouse em uma palavra', pvLabel: ['Posts', 'Stories e vídeos', 'Sites', 'Sistema'],
    role1: 'Designer, editor de vídeo e desenvolvedor.',
    role2: 'Peças, vídeos, sites e sistemas, sempre alinhados à identidade de cada marca.',
    view: 'Ver trabalhos',
    avail: 'Disponível para vagas · Santo André, SP',
    byCat: 'Trabalhos por categoria',
    cats: { posts: 'Posts', carrosseis: 'Carrosséis', stories: 'Stories', sites: 'Sites', sistema: 'Sistema' },
    kind: { posts: 'Post', carrosseis: 'Carrossel', stories: 'Story', sites: 'Site', sistema: 'Sistema' },
    caps: ['Post de campanha · semana 2', 'Campanha de inspeção escolar', 'Post institucional', 'Série de produto', 'Carrossel · LC 217/2025', 'Carrossel · Confiança no serviço', 'Carrossel · O que faz', 'Story de divulgação de curso', 'Story de captação', 'Site institucional', 'Landing de captação', 'Landing page de venda', 'CRM do sistema interno', 'Inbox de WhatsApp'],
    militares: 'Plataforma para militares',
    storiesLabel: 'Stories com trabalhos selecionados', hlLabel: 'Destaques: escolha a categoria do story', see: 'Ver', inStory: 'no story',
    prev: 'Story anterior', next: 'Próximo story', project: 'Ver o projeto', tip: 'Toque nas laterais para passar · segure para pausar',
    pause: 'Pausar', play: 'Tocar', of: 'de',
  },
  sec: {
    social: { tag: 'Design gráfico e conteúdo', title: 'Social media', brands: 'marcas', pieces: 'peças', lead: 'Posts, carrosséis e stories produzidos para clientes da agência, cada um na identidade visual da marca. Selecione uma publicação para ampliar.', brandsLabel: 'Marcas', pubs: 'Publicações', carousel: 'carrossel', carousels: 'carrosséis', posts: 'posts', open: 'Publicação aberta', slidesLabel: 'Slides: use as setas do teclado', prev: 'Slide anterior', next: 'Próximo slide', carouselOf: 'carrossel de {n} slides', slideOf: 'slide {k} de {n}', kindCar: 'Carrossel', kindPost: 'Post', piece: 'peças' },
    sites: { tag: 'Design e desenvolvimento web', title: 'Sites', projects: 'projetos', lead: 'Sites institucionais e de campanha, do layout ao código. Role a página dentro da janela para ver o site completo; ao lado, a versão para celular.', open: 'Abrir o site', private: 'Página de cliente, mostrada por captura.', desktopLabel: '{name} no computador. Passe o mouse, foque ou toque para rolar a página.', fullAlt: 'Página inteira do {name}', mobAlt: '{name} no celular' },
    hub: {
      tag: 'Sistema interno', title: 'Nobre Hub', meta: '2025 a 2026', lead: 'Plataforma interna que centraliza a operação da agência, do primeiro contato com o lead ao pós-venda.',
      facts: [
        { k: 'Problema', v: 'Vendas, produção e pós-venda trabalhavam em ferramentas separadas, e cada cliente e projeto era repassado à mão entre as equipes.' },
        { k: 'Solução', v: 'Um fluxo único: o lead entra no CRM, a venda gera o projeto, a produção entrega, o pós-venda aprova e cobra. Alterações voltam ao mesmo produtor.' },
        { k: 'Meu papel', v: 'Design de interface e desenvolvimento completo, em uso diário por vendas, produção, pós-venda e liderança.' },
        { k: 'Stack', v: 'React, TypeScript e PostgreSQL.' },
      ],
      mods: [
        { t: 'CRM e vendas', d: 'Funil em kanban, contatos e Lead 360°' },
        { t: 'Inbox WhatsApp', d: 'Atendimento com áudio e modelos de mensagem' },
        { t: 'Produção', d: 'Boards por produtor, pontuação e distribuição' },
        { t: 'Pós-venda', d: 'Entrega, alterações e pagamento' },
        { t: 'Dashboards', d: 'Vendas, produção e financeiro por setor' },
        { t: 'Estratégico', d: 'Projetos com subtarefas e notas colaborativas' },
        { t: 'Social media', d: 'Contratos e agenda de posts por cliente' },
        { t: 'Equipe', d: 'Chat interno, metas e permissões por cargo' },
        { t: 'Studio com IA', d: 'Roteiro, cenas e imagens geradas por IA. Preparo de cada vídeo: de 1h30 para 10 min', ai: true },
      ],
      screens: 'Telas do Nobre Hub', modules: 'Módulos', fine: 'As telas mostram dados fictícios de demonstração.', screenAlt: 'Nobre Hub, tela {t}',
    },
    about: {
      tag: 'Sobre', meta: 'Santo André, SP', alt: 'Retrato de Caio Augusto',
      title: 'Penso a peça e o sistema que a sustenta como um trabalho só.',
      bio: [
        'Comecei como editor de vídeo na Nobre Marketing, em dezembro de 2024. Ao longo do caminho assumi o design das peças, o desenvolvimento dos sites e, depois, a construção do Nobre Hub, o sistema interno da agência, na atuação estratégica.',
        'Entendo tanto a criação quanto a parte técnica, o que me permite levar uma ideia da peça até a página e o sistema que a sustentam, sem perder a identidade da marca. Busco uma vaga em design, vídeo ou desenvolvimento.',
      ],
      info: [
        { k: 'Base', v: 'Santo André, SP' },
        { k: 'Formação', v: 'Análise e Desenvolvimento de Sistemas, Fundação Santo André, 2027–2028' },
        { k: 'Idiomas', v: 'Português nativo, inglês avançado' },
      ],
      status: 'Disponível para vagas',
      exp: 'Experiência', expMeta: ['Nobre Marketing', 'Dez 2024 – Mai 2026', '1 ano e meio'], latest: 'mais recente',
      kit: 'Competências', kitMeta: 'por área de atuação',
      jobs: [
        {
          when: 'Set 2025 – Mai 2026', role: 'Atuação estratégica', org: 'Nobre Marketing · São Sebastião do Paraíso, MG',
          sum: 'Responsável pelas soluções digitais da agência: levantamento de necessidades, design, desenvolvimento e manutenção de sites, sistema interno e automações.',
          rows: [
            { k: 'Escopo', v: ['Sites e páginas de campanha, do layout à publicação', 'Sistema interno e automações da operação', 'Peças e conteúdo para as redes dos clientes'] },
            { k: 'Responsabilidades', v: ['Levantar o processo de cada área e transformar em fluxo de trabalho no sistema', 'Desenhar a interface e desenvolver front-end, banco de dados e integrações', 'Rastrear eventos e guardar os dados de cada página em base própria', 'Manter o que já estava no ar e evoluir conforme o uso do time'] },
            { k: 'Entregas', v: ['Sites institucionais e landing pages de captação e de venda', 'Nobre Hub: CRM, atendimento por WhatsApp, produção, pós-venda, dashboards e permissões', 'Automações ligadas a APIs, incluindo IA generativa em fluxos de produção', 'Calendários de conteúdo, posts e carrosséis para clientes'] },
            { k: 'Trabalhava com', v: ['Vendas, produção, pós-venda e liderança, que usavam o sistema todo dia', 'Os clientes da agência, nas peças e nas páginas'] },
            { k: 'Ferramentas' },
          ],
        },
        {
          when: 'Dez 2024 – Set 2025', role: 'Editor de vídeo', org: 'Nobre Marketing · São Sebastião do Paraíso, MG',
          sum: 'Editor de vídeo da agência, com participação crescente em organização de processos e criação de soluções internas, que levou à função seguinte.',
          rows: [
            { k: 'Escopo', v: ['Vídeos institucionais e conteúdo audiovisual das campanhas e da comunicação da agência'] },
            { k: 'Responsabilidades', v: ['Edição, motion e finalização, do material bruto ao vídeo pronto', 'Versões por formato e ajustes depois da revisão', 'Organizar arquivos e entregas, e pesquisar ferramentas para agilizar a rotina do time'] },
            { k: 'Entregas', v: ['Vídeos para campanhas, apresentações e redes da agência', 'Primeiras automações e soluções internas para os times'] },
            { k: 'Trabalhava com', v: ['Equipe criativa e de produção, a partir de briefings e revisões'] },
            { k: 'Ferramentas' },
          ],
        },
      ],
      skills: [
        { k: 'Design', c: 'Identidade visual, design de interface, direção de arte, tipografia' },
        { k: 'Vídeo e motion', c: 'Edição, motion graphics, roteiro, ritmo e narrativa' },
        { k: 'Desenvolvimento', c: 'Front-end e back-end, componentização, design systems, integrações' },
        { k: 'Dados', c: 'Modelagem relacional, consultas e APIs' },
        { k: 'IA aplicada', c: 'IA generativa (texto, imagem e vídeo), automação de fluxos, integração de LLMs via API' },
        { k: 'Boas práticas', c: 'Testes automatizados, acessibilidade, performance, versionamento' },
      ],
    },
    contact: {
      tag: 'Contato', meta: 'Resposta rápida', title: 'Entre em contato',
      sub: 'Disponível para vagas em design, vídeo e desenvolvimento. O contato mais rápido é por e-mail ou WhatsApp.',
      rows: [
        { k: 'E-mail', act: 'Copiar' }, { k: 'WhatsApp', act: 'Abrir conversa' }, { k: 'LinkedIn', act: 'Ver perfil' }, { k: 'Currículo', act: 'Baixar PDF' },
      ],
      copied: 'Copiado', copyFail: 'Copie ao lado', copy: 'Copiar', foot: 'Caio Augusto Ferreira Rodrigues · Santo André, SP', top: 'Voltar ao topo',
    },
  },
};

const en: typeof pt = {
  htmlLang: 'en',
  title: 'Caio Augusto · Design, video and development',
  description: 'Portfolio of Caio Augusto: social media, websites and the internal system Nobre Hub. Designer, video editor and developer.',
  nav: { label: 'Sections', social: 'Social media', sites: 'Websites', hub: 'System', about: 'About', contact: 'Contact', cv: 'CV', cvFull: 'Download CV', open: 'Open menu', close: 'Close menu', switchTo: 'Switch to Portuguese', switchShort: 'PT' },
  hero: {
    r: ['Designer', 'video editor', 'developer'], and: 'and',
    pre: 'I shape each brand’s identity into', w: ['posts', 'videos', 'websites', 'systems'], hint: 'Hover a word to preview', pvLabel: ['Posts', 'Stories and video', 'Websites', 'System'],
    role1: 'Designer, video editor and developer.',
    role2: 'Posts, videos, websites and systems, always aligned with each brand’s identity.',
    view: 'View work',
    avail: 'Open to opportunities · Santo André, Brazil',
    byCat: 'Work by category',
    cats: { posts: 'Posts', carrosseis: 'Carousels', stories: 'Stories', sites: 'Websites', sistema: 'System' },
    kind: { posts: 'Post', carrosseis: 'Carousel', stories: 'Story', sites: 'Website', sistema: 'System' },
    caps: ['Campaign post · week 2', 'School bus inspection campaign', 'Institutional post', 'Product series', 'Carousel · LC 217/2025', 'Carousel · Trust in the service', 'Carousel · What the agency does', 'Course promotion story', 'Lead generation story', 'Corporate website', 'Lead generation landing page', 'Sales landing page', 'Internal system CRM', 'WhatsApp inbox'],
    militares: 'Platform for military personnel',
    storiesLabel: 'Stories with selected work', hlLabel: 'Highlights: choose a story category', see: 'View', inStory: 'in the story',
    prev: 'Previous story', next: 'Next story', project: 'View project', tip: 'Tap the sides to navigate · hold to pause',
    pause: 'Pause', play: 'Play', of: 'of',
  },
  sec: {
    social: { tag: 'Graphic design and content', title: 'Social media', brands: 'brands', pieces: 'pieces', lead: 'Posts, carousels and stories produced for the agency’s clients, each in the brand’s own visual identity. Select a post to enlarge it.', brandsLabel: 'Brands', pubs: 'Posts', carousel: 'carousel', carousels: 'carousels', posts: 'posts', open: 'Open post', slidesLabel: 'Slides: use the keyboard arrows', prev: 'Previous slide', next: 'Next slide', carouselOf: 'carousel with {n} slides', slideOf: 'slide {k} of {n}', kindCar: 'Carousel', kindPost: 'Post', piece: 'pieces' },
    sites: { tag: 'Web design and development', title: 'Websites', projects: 'projects', lead: 'Corporate and campaign websites, designed and built from layout to code. Scroll the page inside the window to see the full site; beside it, the mobile version.', open: 'Open website', private: 'Client page, shown as a screenshot.', desktopLabel: '{name} on desktop. Hover, focus or tap to scroll the page.', fullAlt: 'Full page of {name}', mobAlt: '{name} on mobile' },
    hub: {
      tag: 'Internal system', title: 'Nobre Hub', meta: '2025 to 2026', lead: 'An internal platform that centralizes the agency’s operations, from first contact with a lead to after-sales.',
      facts: [
        { k: 'Problem', v: 'Sales, production and after-sales worked in separate tools, and every client and project was handed over manually between teams.' },
        { k: 'Solution', v: 'A single flow: the lead enters the CRM, the sale creates the project, production delivers, and after-sales handles approval and payment. Revisions return to the same producer.' },
        { k: 'My role', v: 'Interface design and full development, used daily by sales, production, after-sales and leadership.' },
        { k: 'Stack', v: 'React, TypeScript and PostgreSQL.' },
      ],
      mods: [
        { t: 'CRM and sales', d: 'Kanban pipeline, contacts and Lead 360°' },
        { t: 'WhatsApp inbox', d: 'Customer service with audio and message templates' },
        { t: 'Production', d: 'Boards per producer, scoring and distribution' },
        { t: 'After-sales', d: 'Delivery, revisions and payment' },
        { t: 'Dashboards', d: 'Sales, production and finance by department' },
        { t: 'Strategic', d: 'Projects with subtasks and collaborative notes' },
        { t: 'Social media', d: 'Contracts and post schedule per client' },
        { t: 'Team', d: 'Internal chat, goals and role-based permissions' },
        { t: 'AI Studio', d: 'Script, scenes and images generated with AI. Prep time per video: from 1h30 to 10 min', ai: true },
      ],
      screens: 'Nobre Hub screens', modules: 'Modules', fine: 'Screens show fictional demo data.', screenAlt: 'Nobre Hub, {t} screen',
    },
    about: {
      tag: 'About', meta: 'Santo André, Brazil', alt: 'Portrait of Caio Augusto',
      title: 'I see the design and the system behind it as one piece of work.',
      bio: [
        'I started as a video editor at Nobre Marketing in December 2024. Along the way I took on design, website development and, later, building Nobre Hub, the agency’s internal system, in a strategic role.',
        'I understand both the creative side and the technical side, which lets me take an idea from the asset all the way to the page and the system behind it, without losing the brand’s identity. I’m looking for a role in design, video or development.',
      ],
      info: [
        { k: 'Based in', v: 'Santo André, SP, Brazil' },
        { k: 'Education', v: 'Systems Analysis and Development, Fundação Santo André, 2027–2028' },
        { k: 'Languages', v: 'Portuguese (native), English (advanced)' },
      ],
      status: 'Open to opportunities',
      exp: 'Experience', expMeta: ['Nobre Marketing', 'Dec 2024 – May 2026', '1.5 years'], latest: 'most recent',
      kit: 'Skills', kitMeta: 'by area',
      jobs: [
        {
          when: 'Sep 2025 – May 2026', role: 'Strategic role', org: 'Nobre Marketing · São Sebastião do Paraíso, MG, Brazil',
          sum: 'Responsible for the agency’s digital solutions: requirements gathering, design, development and maintenance of websites, the internal system and automations.',
          rows: [
            { k: 'Scope', v: ['Websites and campaign pages, from layout to launch', 'Internal system and operational automations', 'Posts and content for clients’ social channels'] },
            { k: 'Responsibilities', v: ['Mapping each team’s process and turning it into a workflow in the system', 'Designing the interface and building front end, database and integrations', 'Tracking events and storing each page’s data in a dedicated database', 'Maintaining live products and evolving them based on team usage'] },
            { k: 'Deliverables', v: ['Corporate websites and lead generation and sales landing pages', 'Nobre Hub: CRM, WhatsApp customer service, production, after-sales, dashboards and permissions', 'API-connected automations, including generative AI in production workflows', 'Content calendars, posts and carousels for clients'] },
            { k: 'Worked with', v: ['Sales, production, after-sales and leadership, who used the system every day', 'The agency’s clients, on assets and pages'] },
            { k: 'Tools' },
          ],
        },
        {
          when: 'Dec 2024 – Sep 2025', role: 'Video editor', org: 'Nobre Marketing · São Sebastião do Paraíso, MG, Brazil',
          sum: 'The agency’s video editor, with a growing role in process organization and building internal solutions, which led to the next position.',
          rows: [
            { k: 'Scope', v: ['Institutional videos and audiovisual content for the agency’s campaigns and communications'] },
            { k: 'Responsibilities', v: ['Editing, motion and finishing, from raw footage to final video', 'Format versions and revisions after review', 'Organizing files and deliveries, and researching tools to speed up the team’s routine'] },
            { k: 'Deliverables', v: ['Videos for campaigns, presentations and the agency’s channels', 'First automations and internal solutions for the teams'] },
            { k: 'Worked with', v: ['Creative and production team, based on briefs and reviews'] },
            { k: 'Tools' },
          ],
        },
      ],
      skills: [
        { k: 'Design', c: 'Visual identity, interface design, art direction, typography' },
        { k: 'Video and motion', c: 'Editing, motion graphics, scriptwriting, pacing and storytelling' },
        { k: 'Development', c: 'Front end and back end, componentization, design systems, integrations' },
        { k: 'Data', c: 'Relational modeling, queries and APIs' },
        { k: 'Applied AI', c: 'Generative AI (text, image and video), workflow automation, LLM integration via API' },
        { k: 'Best practices', c: 'Automated testing, accessibility, performance, version control' },
      ],
    },
    contact: {
      tag: 'Contact', meta: 'Quick reply', title: 'Get in touch',
      sub: 'Open to roles in design, video and development. The fastest way to reach me is by email or WhatsApp.',
      rows: [
        { k: 'Email', act: 'Copy' }, { k: 'WhatsApp', act: 'Open chat' }, { k: 'LinkedIn', act: 'View profile' }, { k: 'CV', act: 'Download PDF' },
      ],
      copied: 'Copied', copyFail: 'Copy it manually', copy: 'Copy', foot: 'Caio Augusto Ferreira Rodrigues · Santo André, Brazil', top: 'Back to top',
    },
  },
};

export const ui = { pt, en };
export const dict = (lang: Lang) => ui[lang];
