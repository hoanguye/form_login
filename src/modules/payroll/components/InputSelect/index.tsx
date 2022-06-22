import React, { useState } from 'react';
import { IconType } from 'react-icons';

import './InputSelect.scss';
interface Props {
  label: string;
  Icon: IconType;
  data: any[];
  updateValue: (value: string) => void;
}

const InputSelect = ({ label, data, Icon, updateValue }: Props) => {
  const [isDrop, setIsDrop] = useState<boolean>(false);
  const [value, setValue] = useState<string>(label);
  return (
    <div className="input-select">
      <div className="selected" onClick={() => setIsDrop(!isDrop)}>
        {' '}
        {value}{' '}
        {value === label && (
          <span className="input_icon">
            <Icon />
          </span>
        )}
        {isDrop && (
          <div className="option_list">
            {data.map((option, index) => (
              <div
                onClick={() => {
                  setValue(option.value);
                  updateValue(option.value);
                }}
                key={index}
              >
                {option.title}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default InputSelect;
