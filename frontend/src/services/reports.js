/* eslint-disable camelcase */
import { ApiClient } from '../libs/axios';

const apiClient = new ApiClient();

export async function createReport({
  title, description, saved_search, term,
}) {
  return apiClient.post('/reports', {
    title, description, saved_search, term,
  });
}

export async function updateReport(id, { title, description }) {
  return apiClient.put(`/reports/${id}`, { title, description });
}

export async function getReportsFromSearch(id) {
  return apiClient.get(`/reports/search/${id}`);
}

export async function getReport(id) {
  return apiClient.get(`/reports/${id}`);
}

export async function deleteSavedSearch(id) {
  return apiClient.delete(`/reports/${id}`);
}
