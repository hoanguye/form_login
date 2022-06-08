import React from 'react';
import { FormattedMessage } from 'react-intl';

import './input.scss';
interface Props {
  handleOnChange: (key: string, value: string) => void;
  value: string;
  id: string;
  errorMessage: string;
  type: string;
}

const Input = (props: Props) => {
  return (
    <>
      <div className="input">
        <label>
          <FormattedMessage id={props.id} />
        </label>
        <input
          type={props.type}
          value={props.value}
          onChange={(e) => {
            props.handleOnChange(props.id, e.target.value);
          }}
        />
      </div>
      {props.errorMessage && (
        <div className="message_err">
          <FormattedMessage id={props.errorMessage} />
        </div>
      )}
    </>
  );
};

export default Input;
