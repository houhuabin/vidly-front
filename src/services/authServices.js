import http from "./httpService";

import jwtDecode from "jwt-decode";
const authEndpoint = "/auth";
const tokenKey = "token";

//setTimeout(() => {
http.setToken(getJWT());
//}, 1000);
//console.log(" auth start---------------------------------");
export async function login(email, password) {
  const { data: jwt } = await http.post(authEndpoint, { email, password });

  localStorage.setItem(tokenKey, jwt);
  // http.setToken(jwt);
}

export async function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
  // http.setToken(jwt);
}

export function logout() {
  localStorage.removeItem(tokenKey);
}

export function getUser() {
  // http.test();
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}

export function getJWT() {
  const jwt = localStorage.getItem(tokenKey);
  return jwt;
}

export default { login, loginWithJwt, logout, getUser, getJWT };
