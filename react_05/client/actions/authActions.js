import axios from "axios";
import setAuthorization from "../utils/setAuthorizationToken";
import jwt_decode from "jwt-decode";
import { SET_CURRENT_USER } from "./types";

export function setCurrentUser(user) {
  console.log(user);
  return {
    type: SET_CURRENT_USER,
    user
  };
}

export function logout() {
  return dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthorization(false);
    dispatch(setCurrentUser({}));
  }
}

export function login(data) {
  return dispatch => {
    return axios.post("/api/auth", data).then(res => {
      const token = res.data.token;
      localStorage.setItem('jwtToken', token);
      setAuthorization(token);
      dispatch(setCurrentUser(jwt_decode(token)));
    });
  }
}
