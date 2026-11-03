// Заполните ссылки: site — сайт проекта, bot — Telegram-бот
const PROJECTS = [
  {
    title: 'Havana Dance Club',
    desc: 'Сайт студии латинских танцев в Гомеле: расписание, тарифы, форма записи на пробное занятие.',
    tags: ['Сайт', 'SEO', 'Адаптив'],
    site: 'https://denkaydunov.github.io/havana-club-website/',
    shots: ['img/havana-hero.png'],
  },
  {
    emoji: '☭',
    title: 'Сталион',
    desc: 'Маркетинговый сайт и Telegram-бот: фитнес-RPG в сеттинге тёмного СССР с архивом эпизодов.',
    tags: ['Сайт', 'Telegram-бот', 'PWA'],
    site: 'https://denkaydunov.github.io/StalionBot-site/',
    shots: ['img/stalion-archive.png'],
    bot: 'https://telegram.me/StalionRPGBot',
  },
  {
    title: 'SportBot',
    desc: 'Бот для фитнес-челленджей: статистика, графики, рейтинги, 90+ достижений, мультиязычность, документация-сайт.',
    tags: ['Java', 'Telegram-бот', 'Сайт'],
    site: 'https://denkaydunov.github.io/SportBot-site/',
    shots: ['img/sportbot-hero.png'],
    bot: 'https://telegram.me/SquatMasterBot',
  },
  {
    title: 'Marfa House — курсы стрижек',
    desc: 'Лендинг курсов стрижек в Гомеле и Telegram-бот: информация о курсе, FAQ, пошаговая заявка с уведомлением администратору, WebApp.',
    tags: ['Сайт', 'Python', 'aiogram', 'Telegram-бот', 'WebApp'],
    site: 'https://denkaydunov.github.io/marfa-house-site/',
    shots: ['img/marfa-hero.png'],
    bot: 'https://telegram.me/MarfaHairSchoolBot',
  },
  {
    title: 'Control Panel',
    desc: 'Локальная панель управления процессами PM2 и Docker-контейнерами: запуск, остановка, логи, порты и счётчик запросов.',
    tags: ['Node.js', 'Без зависимостей'],
    shots: ['img/control-panel.png'],
  },
  {
    emoji: '🎓',
    title: 'CAP Cert Quiz',
    desc: 'Квиз для подготовки к сертификации SAP CAP: 481 вопрос по модулям, случайные тесты, прогресс обучения, история и вход через аккаунт.',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'Postgres'],
    shots: ['img/cap-quiz.png'],
  },
];

const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const link = (href, text) => `<a href="${esc(href)}" target="_blank" rel="noopener">${text}</a>`;

document.getElementById('grid').innerHTML = PROJECTS.map((p, i) => {
  const shot = (p.shots || [])[0];
  const frame = (src) => `<div class="frame"><img src="${esc(src)}" alt="${esc(p.title)}" loading="lazy"></div>`;
  const href = p.site || p.bot;
  const media = `<div class="media">${frame(shot)}</div>`;
  return `
  <article class="project${i % 2 ? ' reverse' : ''}">
    ${href ? `<a class="media-link" href="${esc(href)}" target="_blank" rel="noopener">${media}</a>` : media}
    <div class="info">
      <span class="num">0${i + 1}</span>
      <h3>${p.emoji ? `${p.emoji} ` : ''}${esc(p.title)}</h3>
      <p class="desc">${esc(p.desc)}</p>
      <p class="tags">${p.tags.map((t) => `<span>${esc(t)}</span>`).join('')}</p>
      <div class="links">
        ${p.site ? link(p.site, 'Открыть сайт →') : ''}
        ${p.bot ? link(p.bot, 'Открыть бота →') : ''}
      </div>
    </div>
  </article>`;
}).join('');

document.getElementById('year').textContent = new Date().getFullYear();
