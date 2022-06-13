import React from 'react';
import { Formik, Form } from 'formik';
import { FormattedMessage } from 'react-intl';
import * as yup from 'yup';
import { IRegisterParams } from 'models/auth';
import Input from 'modules/auth/components/Input';
import './RegisterForm.scss';
import InputSelect from '../InputSelect';

interface Props {
  isLoading: boolean;
  errorMessage: string | undefined;
  locations?: any[];
  state?: any[];
  onSignUp: (params: IRegisterParams) => Promise<void>;
  handleSelectRegion?: (id: number) => Promise<void>;
}
const RegisterForm = (props: Props) => {
  const genders: any[] = [
    {
      id: 1,
      name: 'nam',
    },
    {
      id: 2,
      name: 'nữ',
    },
  ];
  const initialValues: IRegisterParams = {
    email: '',
    password: '',
    repeatPassword: '',
    name: '',
    gender: '',
    region: '',
    state: '',
  };
  const validation = yup.object().shape({
    email: yup.string().email('Invalid email').required('emailRequire'),
    password: yup.string().min(4, 'minPasswordInvalid').required('passwordRequire'),
    repeatPassword: yup
      .string()
      .required('confirmPasswordRequire')
      .oneOf([yup.ref('password')], 'confirmPasswordInvalid'),
    name: yup.string().required('nameRequire'),
    gender: yup.string().required('genderRequire'),
    region: yup.string().required('regionRequire'),
    state: yup.string().required('stateRequire'),
  });
  return (
    <div className="form-wrapper">
      <Formik
        initialValues={initialValues}
        validationSchema={validation}
        onSubmit={(values) => {
          props.onSignUp(values);
        }}
      >
        {({ errors, values, touched }) => (
          <Form>
            {props.errorMessage && <div className="message-header">{props.errorMessage}</div>}
            <Input name="email" errorMessage={errors.email} type="email" touched={touched.email} />
            <Input name="password" errorMessage={errors.password} type="password" touched={touched.password} />
            <Input
              name="repeatPassword"
              errorMessage={errors.repeatPassword}
              type="password"
              touched={touched.repeatPassword}
            />
            <Input name="name" errorMessage={errors.name} type="text" touched={touched.name} />
            <InputSelect name="gender" options={genders} errorMessage={errors.gender} touched={touched.gender} />
            <InputSelect
              name="region"
              options={props.locations}
              errorMessage={errors.region}
              value={values}
              handleSelectRegion={props.handleSelectRegion}
              touched={touched.region}
            />
            <InputSelect name="state" options={props.state} errorMessage={errors.state} touched={touched.state} />
            <button className="btn" type="submit" disabled={props.isLoading}>
              {props.isLoading && <div className="spinner-border spinner-border-sm text-light mr-5" role="status" />}
              <FormattedMessage id="register" />
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterForm;
