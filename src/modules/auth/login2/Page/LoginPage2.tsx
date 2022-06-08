import React, { useCallback, useState } from 'react';
import { ILoginParams } from '../../../../models/auth';
import LoginForm2 from '../components/LoginForm2';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AppState } from '../../../../redux/reducer';
import { Action } from 'redux';
import { fetchThunk } from '../../../common/redux/thunk';
import { API_PATHS } from '../../../../configs/api';
import { RESPONSE_STATUS_SUCCESS } from '../../../../utils/httpResponseCode';
import { setUserInfo } from '../../redux/authReducer';
import Cookies from 'js-cookie';
import { ACCESS_TOKEN_KEY } from '../../../../utils/constants';
import { ROUTES } from '../../../../configs/routes';
import { replace } from 'connected-react-router';
import { getErrorMessageResponse } from '../../../../utils';
import logo from '../../../../logo-420-x-108.png';

import './LoginPage2.scss';
interface Props {}

const LoginPage2 = (props: Props) => {
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch<ThunkDispatch<AppState, null, Action<string>>>();
  const onSubmit = useCallback(
    async (values: ILoginParams) => {
      setErrorMessage('');
      setLoading(true);
      const json = await dispatch(
        fetchThunk(API_PATHS.signIn, 'post', { email: values.email, password: values.password }),
      );

      setLoading(false);

      if (json?.code === RESPONSE_STATUS_SUCCESS) {
        dispatch(setUserInfo(json.data));
        Cookies.set(ACCESS_TOKEN_KEY, json.data.token, { expires: values.rememberMe ? 7 : undefined });
        dispatch(replace(ROUTES.home));
        return;
      }
      setErrorMessage(getErrorMessageResponse(json));
    },
    [dispatch],
  );

  return (
    <div className="wrapper">
      <img className="logo" src={logo} alt="logo" />
      <LoginForm2 onSubmit={onSubmit} errorMessage={errorMessage} loading={loading} />
    </div>
  );
};

export default LoginPage2;
