import React, { useState } from 'react';
import { InputNumber } from 'mz-react-input-number';
import CenterScreen from '../styled-components/CenterScreen';
import TitleComponent from '../styled-components/TitleComponent';

const MZInputNumber = () => {

    const [value, setValue] = useState(10);

    return (
        <div>
            <CenterScreen>
                <TitleComponent>
                    MZ Input Number
                </TitleComponent>
                <InputNumber
                    min={0}
                    max={100}
                    step={0.1}
                    value={value}
                    onChangeCallback={setValue}
                />
            </CenterScreen>

        </div>

    );
};
export default MZInputNumber