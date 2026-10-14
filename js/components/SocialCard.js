import { html, escapeAttr } from '../utils/html.js';
import { t } from '../i18n/index.js';

const stripProtocol = url => url.replace(/^https?:\/\//, '').replace(/\/$/, '');

export function SocialCard({ key, icon, url }) {
  return html`
    <a class="link-card" href="${escapeAttr(url)}" target="_blank" rel="noopener noreferrer">
      <span class="link-icon"><i class="${icon}"></i></span>
      <span class="link-text">
        <strong>${t(`socials.${key}.name`)}</strong>
        <span>${t(`socials.${key}.description`)}</span>
        <span class="link-url">${stripProtocol(url)}</span>
      </span>
    </a>`;
}
