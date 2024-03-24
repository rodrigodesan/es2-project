import { ApiClient } from '../libs/axios';

const apiClient = new ApiClient();

export async function getUsers() {
  return apiClient.get('/users');
}

export async function createUser({ name, email, password }) {
  return apiClient.post('/users', { name, email, password });
}

export async function getUser(id) {
  return apiClient.get(`/users/${id}`);
}

export async function updateUser(id, { name, email, password }, token) {
  return apiClient.put(`/users/${id}`, { name, email, password }, token);
}

export async function deleteUser(id, token) {
  return apiClient.delete(`/users/${id}`, token);
}
