import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import { FormattedMessage } from 'react-intl';
import { ILoginParams, ILoginValidation } from '../../../../../models/auth';

import Input from '../Input';
import './LoginForm2.scss';
interface Props {
  onSubmit(values: ILoginValidation): void;
  loading: boolean;
  errorMessage: string;
}

const LoginForm2 = (props: Props) => {
  const handleOnSubmit = (values: ILoginParams) => {
    props.onSubmit({ email: values.email, password: values.password });
  };

  const initialValues: ILoginParams = {
    email: '',
    password: '',
    rememberMe: false,
  };

  const signUpSchema = yup.object().shape({
    email: yup.string().email('Invalid email').required('required email'),
    password: yup.string().min(4, 'password more than 4 characters').required('required password'),
  });
  return (
    <div className="form-wrapper">
      <Formik
        initialValues={initialValues}
        validationSchema={signUpSchema}
        onSubmit={(values) => {
          console.log(values);
          handleOnSubmit(values);
        }}
      >
        {({ errors }) => (
          <Form>
            {props.errorMessage && <div className="message-header">{props.errorMessage}</div>}

            <Input name="email" errorMessage={errors.email} type="email" />

            <Input name="password" errorMessage={errors.password} type="password" />
            <div className="checkbox">
              <Field type="checkbox" name="rememberMe" />
              <label>
                <FormattedMessage id="Lưu thông tin đăng nhập" />
              </label>
            </div>
            <button className="btn" type="submit">
              {props.loading && <div className="spinner-border spinner-border-sm text-light mr-5" role="status" />}
              Đăng nhập
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm2;
