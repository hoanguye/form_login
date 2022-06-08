import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { ILoginParams, ILoginValidation } from '../../../../../models/auth';
import { validateLogin } from '../../../utils';
import Input from '../Input';

import './LoginForm2.scss';
interface Props {
  onSubmit(values: ILoginValidation): void;
  loading: boolean;
  errorMessage: string;
}

const LoginForm2 = (props: Props) => {
  const [data, setData] = useState<ILoginParams>({ email: '', password: '', rememberMe: false });
  const [errorMessage, setErrorMessage] = useState({ errEmail: '', errPassword: '' });
  const handleOnSubmit = (e: any) => {
    if (validateLogin(data).email || validateLogin(data).password) {
      e.preventDefault();
      setErrorMessage({ errEmail: validateLogin(data).email, errPassword: validateLogin(data).password });
      return;
    } else {
      e.preventDefault();
      props.onSubmit({ email: data.email, password: data.password });
    }
  };
  const handleOnChange = (key: string, value: string) => {
    setData({ ...data, [key]: value });
  };
  console.log(data);
  return (
    <form onSubmit={handleOnSubmit} className="form">
      {props.errorMessage && <div className="message-header">{props.errorMessage}</div>}

      <Input value={data.email} handleOnChange={handleOnChange} id="email" errorMessage={errorMessage.errEmail} type="email" />

      <Input
        value={data.password}
        handleOnChange={handleOnChange}
        id="password"
        errorMessage={errorMessage.errPassword}
        type="password"
      />
      <div className="checkbox">
        <input
          type="checkbox"
          checked={data.rememberMe}
          onChange={(e) => {
            setData({ ...data, rememberMe: e.target.checked });
          }}
        />
        <label>
          <FormattedMessage id="Lưu thông tin đăng nhập" />
        </label>
      </div>

      <button
        onClick={(e) => {
          // e.preventDefault();
          if (props.loading) {
            e.preventDefault();
            return;
          } else {
            return;
          }
        }}
        className="btn"
        type="submit"
      >
        {props.loading && <div className="spinner-border spinner-border-sm text-light mr-5" role="status" />}
        Đăng nhập
      </button>
    </form>
  );
};

export default LoginForm2;
