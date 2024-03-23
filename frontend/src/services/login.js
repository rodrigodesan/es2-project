import { ApiClient } from '../libs/axios';

const apiClient = new ApiClient();

export function setToken(token) {
  return apiClient.setAuthorization(token);
}

export async function signIn({ email, password }) {
  return apiClient.post('/login', { email, password });
}

export async function validateToken(token) {
  return apiClient.post('/login/validate', { token });
}
