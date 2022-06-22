import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';
import { combineReducers } from 'redux';
import authReducer, { AuthState } from '../modules/auth/redux/authReducer';
import intlReducer, { IntlState } from '../modules/intl/redux/intlReducer';
import profileReducer, { } from '../modules/profile/redux/profileReducer'
import payrollReducer from 'modules/payroll/redux/payrollReducer'
export interface AppState {
  router: RouterState;
  intl: IntlState;
  profile: AuthState;
  info: any,
  payroll: any;
}

export default function createRootReducer(history: History) {
  return combineReducers({
    router: connectRouter(history),
    intl: intlReducer,
    profile: authReducer,
    info: profileReducer,
    payroll: payrollReducer,
  });
}

export type RootState = ReturnType<typeof createRootReducer>
