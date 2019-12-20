/**
 *  Profile Actions
 *
 *  @type Actions & Action Creators
 *  @desc actions for profile
 */

import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import axios from "axios";

import * as routes from "../../constants/routes";
import * as types from "../actionTypes";

export const getCurrentProfile = (payload: any): AnyAction => {
  return {
    type: types.GET_PROFILE,
    payload: payload
  };
};

export const profileError = (payload: any): AnyAction => {
  return {
    type: types.PROFILE_ERROR,
    payload: payload
  };
};

export const doGetCurrentProfile = (): any => async (
  dispatch: ThunkDispatch<{}, {}, AnyAction>
) => {
  // Login success ..
  try {
    const response = await axios.get(routes.API_CURRENT_PROFILE);
    dispatch(getCurrentProfile(response.data));

    // Login fail ..
  } catch (error) {
    dispatch(
      profileError({
        msg: error.response.statusText,
        status: error.response.status
      })
    );
  }
};
