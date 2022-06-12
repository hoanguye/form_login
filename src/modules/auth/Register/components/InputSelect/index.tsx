/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, memo } from 'react';
import { Field } from 'formik';
import { FormattedMessage } from 'react-intl';
import { IRegisterParams } from 'models/auth';
// import { FormattedMessage } from 'react-intl';

import './InputSelect.scss';
interface Props {
  name: string;
  options: any[];
  errorMessage: string | undefined;
  handleChange?: (e: any) => void;
  value?: IRegisterParams;
  handleSelectRegion?: (id: number) => Promise<void>;
}

const InputSelect = (props: Props) => {
  useEffect(() => {
    if (props.handleSelectRegion && props.value?.region) {
      props.handleSelectRegion(Number(props.value?.region));
      props.value.state = '';
    } 
  }, [props.value?.region]);
  return (
    <>
      <div className="input">
        <label htmlFor={props.name}>{props.name}</label>
        <Field as="select" className="input-element" name={props.name}>
          <option value="">-- select {props.name} --</option>
          {props?.options?.length > 0 &&
            props?.options?.map((item, index) => {
              return (
                <option key={index} value={item?.id}>
                  {item?.name}
                </option>
              );
            })}
        </Field>
        {props.errorMessage && (
          <div className="message_err">
            <FormattedMessage id={props.errorMessage} />
          </div>
        )}
      </div>
    </>
  );
};

export default memo(InputSelect);
