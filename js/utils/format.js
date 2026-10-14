import { getLang, t } from '../i18n/index.js';

export const formatNumber = value => new Intl.NumberFormat(getLang()).format(value);

export const formatCommits = value =>
  `${formatNumber(value)} ${t(value === 1 ? 'contributors.commit.one' : 'contributors.commit.other')}`;
