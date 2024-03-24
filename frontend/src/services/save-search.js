import { ApiClient } from '../libs/axios';

const apiClient = new ApiClient();

export async function saveSearch({
  term, filter1, filter2, filter3,
}) {
  return apiClient.post('/saved-searches', {
    term, filter1, filter2, filter3,
  });
}

export async function getSavedSearches() {
  return apiClient.get('saved-searches');
}

export async function getSavedSearch(id) {
  return apiClient.get(`/saved-searches/${id}`);
}

export async function deleteSavedSearch(id) {
  return apiClient.delete(`/saved-searches/${id}`);
}
