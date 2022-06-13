import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Field } from 'formik';
import './input.scss';
interface Props {
  name: string;
  errorMessage: string | undefined;
  type: string;
  touched?: boolean;
}

const Input = (props: Props) => {
  return (
    <>
      <div className="input">
        <label htmlFor={props.name}>{props.name}</label>
        <Field className="input-element" name={props.name} type={props.type} />
      </div>
      {props.errorMessage && props.touched && (
        <div className="message_err">
          <FormattedMessage id={props.errorMessage} />
        </div>
      )}
    </>
  );
};

export default Input;
