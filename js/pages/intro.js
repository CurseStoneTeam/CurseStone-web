import { html } from '../utils/html.js';
import { site } from '../data/site.js';
import { t } from '../i18n/index.js';
import { Admonition } from '../components/Admonition.js';
import { Button } from '../components/Button.js';

const FEATURES = [
  { key: 'lua', icon: 'fa-solid fa-puzzle-piece' },
  { key: 'worlds', icon: 'fa-solid fa-earth-americas' },
  { key: 'terrain', icon: 'fa-solid fa-mountain-sun' },
  { key: 'diagnostics', icon: 'fa-solid fa-screwdriver-wrench' },
  { key: 'platforms', icon: 'fa-solid fa-mobile-screen-button' },
];

function Feature({ key, icon }) {
  return html`
    <li class="feature">
      <span class="feature-icon"><i class="${icon}"></i></span>
      <h3>${t(`intro.feature.${key}.title`)}</h3>
      <p>${t(`intro.feature.${key}.text`)}</p>
    </li>`;
}

export default {
  id: 'introduccion',
  title: () => t('nav.intro'),

  render: () => html`
    <figure class="banner">
      <a href="${site.repo.url}" target="_blank" rel="noopener noreferrer">
        <img class="banner-light" src="${site.banner.light}" alt="${t('intro.bannerAlt')}" width="1280" height="640" loading="lazy">
        <img class="banner-dark" src="${site.banner.dark}" alt="" width="1280" height="640" loading="lazy">
      </a>
    </figure>

    <section class="hero">
      <p class="eyebrow">MCPE 0.15.x · Protocol 84</p>

      <h1>${t('intro.title')}</h1>

      <p class="lead">${t('intro.lead')}</p>
      <p>${t('intro.pitch')}</p>

      <div class="button-row">
        ${Button({ href: site.discord, label: t('cta.discord'), icon: 'fa-brands fa-discord', variant: 'primary', size: 'lg' })}
        ${Button({ href: site.repo.url, label: t('cta.github'), icon: 'fa-brands fa-github', size: 'lg' })}
        ${Button({ href: site.docs.full, label: t('cta.docs'), icon: 'fa-solid fa-book', size: 'lg' })}
      </div>
    </section>

    <ul class="feature-grid">
      ${FEATURES.map(Feature)}
    </ul>

    ${Admonition({
      type: 'note',
      title: t('intro.note.title'),
      body: t('intro.note.body'),
    })}
  `,
};
