import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AppState } from 'redux/reducer';
import { Action } from 'redux';
import { setUserInfo } from '../../redux/authReducer';
import Cookies from 'js-cookie';
import { ACCESS_TOKEN_KEY } from '../../../../utils/constants';
import { ROUTES } from '../../../../configs/routes';
import { replace } from 'connected-react-router';
import RegisterForm from '../components/RegisterForm';
import { onRegister } from 'utils/axios';
import { IRegisterParams } from 'models/auth';
import Layout from 'modules/auth/Layouts';

const RegisterPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dispatch = useDispatch<ThunkDispatch<AppState, null, Action<string>>>();
  const [errorMessage, setErrorMessage] = useState<string>('');
  const onSignUp = useCallback(
    async (params: IRegisterParams) => {
      setIsLoading(true);
      try {
        const res = await onRegister(params);
        setIsLoading(false);
        dispatch(setUserInfo(res.data));
        Cookies.set(ACCESS_TOKEN_KEY, res.data.token, { expires: res.rememberMe ? 7 : undefined });
        dispatch(replace(ROUTES.home));
        return;
      } catch (error: any) {
        setIsLoading(false);
        setErrorMessage(error.response.data.message);
      }
    },
    [dispatch],
  );

  return (
    <Layout>
      <RegisterForm onSignUp={onSignUp} isLoading={isLoading} errorMessage={errorMessage} />
    </Layout>
  );
};

export default RegisterPage;
