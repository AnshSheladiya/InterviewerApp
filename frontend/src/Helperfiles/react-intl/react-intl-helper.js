// react-intl-helper.js

import React from 'react';
import { IntlProvider, FormattedMessage, injectIntl } from 'react-intl';

// Define your default locale and messages
const defaultLocale = 'en';
const messages = {
  en: {
    greeting: 'Hello, World!',
  },
  fr: {
    greeting: 'Bonjour, le Monde!',
  },
};

// Wrap your app in an IntlProvider with the selected locale and messages
export const IntlWrapper = ({ children, locale }) => (
  <IntlProvider locale={locale} messages={messages[locale]}>
    {children}
  </IntlProvider>
);

// Example component that uses FormattedMessage
export const Greeting = injectIntl(({ intl }) => (
  <p>
    <FormattedMessage id="greeting" defaultMessage="Hello, World!" />
  </p>
));
