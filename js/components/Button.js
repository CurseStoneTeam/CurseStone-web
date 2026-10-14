import { html, escapeAttr } from '../utils/html.js';

export function Button({ href, label, icon, variant = 'neutral', size = '' }) {
  const classes = ['btn', `btn-${variant}`, size && `btn-${size}`].filter(Boolean).join(' ');

  return html`<a class="${classes}" href="${escapeAttr(href)}" target="_blank" rel="noopener noreferrer">${
    icon ? html`<i class="${icon}"></i> ` : ''
  }${label}</a>`;
}
