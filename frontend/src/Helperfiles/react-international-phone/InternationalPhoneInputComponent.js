import React, { useState } from 'react';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import CenterScreen from '../styled-components/CenterScreen';
import TitleComponent from '../styled-components/TitleComponent';

const PhoneInputComponent = () => {
  const [phone, setPhone] = useState('');

  return (
    <div>
      <CenterScreen>
        <TitleComponent>
        International Phone Input Component
        </TitleComponent>
        <PhoneInput
        defaultCountry="ua"
        value={phone}
        onChange={(newPhone) => setPhone(newPhone)}
      />
      </CenterScreen>

    </div>
  );
};

export default PhoneInputComponent;
