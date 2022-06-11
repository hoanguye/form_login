import React, { useState } from 'react';
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
import logo from '../../../../logo-420-x-108.png';
import './RegisterPage.scss';
import { onRegister } from 'utils/axios';
import { IRegisterParams } from 'models/auth';

const RegisterPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dispatch = useDispatch<ThunkDispatch<AppState, null, Action<string>>>();
  const [errorMessage, setErrorMessage] = useState<string>('');
  const handleRegister = async (params: IRegisterParams) => {
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
  };

  return (
    <div className="wrapper">
      <img className="logo" src={logo} alt="logo" />
      <RegisterForm onSubmit={handleRegister} isLoading={isLoading} errorMessage={errorMessage} />
    </div>
  );
};

export default RegisterPage;
