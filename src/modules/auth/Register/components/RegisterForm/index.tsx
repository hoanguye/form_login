import React, { useState, useEffect, useCallback } from 'react';
import { Formik, Form } from 'formik';
import { FormattedMessage } from 'react-intl';
import * as yup from 'yup';
import { IRegisterParams } from 'models/auth';

import { getCountry, getCity } from 'utils/axios';
import Input from 'modules/auth/components/Input';
import './RegisterForm.scss';
import InputSelect from '../InputSelect';

interface Props {
  onSignUp: (params: IRegisterParams) => Promise<void>;
  isLoading: boolean;
  errorMessage: string | undefined;
}
const RegisterForm = (props: Props) => {
  // const formik = useFormik();

  // const ref = useRef(null);
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

  const [locations, setLocations] = useState<any[]>([]);
  const [state, setState] = useState<any[]>([]);

  useEffect(() => {
    const getData = async () => {
      const resLocation = await getCountry();
      setLocations(resLocation.data);
    };
    getData();
  }, []);

  const handleSelectRegion = useCallback(async (id: number) => {
    if (!id) {
      setState([]);
    } else {
      const resCity = await getCity(id);
      setState(resCity.data);
    }
  }, []);
  return (
    <div className="form-wrapper">
      <Formik
        // innerRef={ref}
        initialValues={initialValues}
        validationSchema={validation}
        onSubmit={(values) => {
          props.onSignUp(values);
        }}
      >
        {({ errors, values }) => (
          <Form>
            {props.errorMessage && <div className="message-header">{props.errorMessage}</div>}
            <Input name="email" errorMessage={errors.email} type="email" />
            <Input name="password" errorMessage={errors.password} type="password" />
            <Input name="repeatPassword" errorMessage={errors.repeatPassword} type="password" />
            <Input name="name" errorMessage={errors.name} type="text" />
            <InputSelect name="gender" options={genders} errorMessage={errors.gender} />
            <InputSelect
              name="region"
              options={locations}
              errorMessage={errors.region}
              value={values}
              handleSelectRegion={handleSelectRegion}
            />
            <InputSelect name="state" options={state} errorMessage={errors.state} />
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
