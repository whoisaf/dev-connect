import { AnyAction } from "redux";

import config from "../../constants/config";
import * as types from "../actionTypes";
import { AuthState } from "../../types/Auth";

const initialState: AuthState = {
  token: localStorage.getItem(config.auth.tokenStorageName),
  isAuthenticated: null,
  loading: true,
  user: null
};

export default (state: AuthState = initialState, action: AnyAction) => {
  const { type, payload } = action;

  switch (type) {
    case types.SIGNUP_SUCCESS:
    case types.LOGIN_SUCCESS:
      localStorage.setItem(config.auth.tokenStorageName, payload.token);
      return { ...state, ...payload, isAuthenticated: true, loading: false };

    case types.SIGNUP_FAIL:
    case types.LOGIN_FAIL:
      localStorage.removeItem(config.auth.tokenStorageName);
      return { ...state, token: null, isAuthenticated: false, loading: false };

    default:
      return state;
  }
};