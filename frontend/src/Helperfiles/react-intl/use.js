
import React from 'react';
import { Greeting, IntlWrapper } from './react-intl-helper';

function ReactIntl() {
  // Set your desired locale here
  const locale = 'fr';

  return (
    <IntlWrapper locale={locale}>
      <div className="App">
        <Greeting />
      </div>
    </IntlWrapper>
  );
}

export default ReactIntl;
