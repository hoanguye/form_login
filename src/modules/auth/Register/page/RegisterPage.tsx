import React, { useCallback, useState, useEffect } from 'react';
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
import { onRegister } from 'utils/api';
import { IRegisterParams } from 'models/auth';
import { getCountry, getCity } from 'utils/api';
import Layout from 'modules/auth/Layouts';

const RegisterPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [locations, setLocations] = useState<any[]>([]);
  const [state, setState] = useState<any[]>([]);
  const dispatch = useDispatch<ThunkDispatch<AppState, null, Action<string>>>();
  const [errorMessage, setErrorMessage] = useState<string>('');

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
      <RegisterForm
        onSignUp={onSignUp}
        isLoading={isLoading}
        errorMessage={errorMessage}
        locations={locations}
        state={state}
        handleSelectRegion={handleSelectRegion}
      />
    </Layout>
  );
};

export default RegisterPage;
