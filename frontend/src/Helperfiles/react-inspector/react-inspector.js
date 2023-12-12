import React from 'react';
import {Inspector} from 'react-inspector';
import CenterScreen from '../styled-components/CenterScreen';
import TitleComponent from '../styled-components/TitleComponent';
import BoxComponent from '../styled-components/BoxComponent';

function ReactInspector() {
  const complexObject = {
    name: 'John Doe',
    age: 30,
    address: {
      street: '123 Main St',
      city: 'Anytown',
      state: 'CA',
    },
  };

  return (
    <CenterScreen>
      <TitleComponent>React Inspector</TitleComponent>
      <BoxComponent>
      <Inspector data={complexObject} /> {/* Use react-inspector to inspect the object */}
      </BoxComponent>
    </CenterScreen>
  );
}

export default ReactInspector;
