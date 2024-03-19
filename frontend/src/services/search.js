import { ApiClient } from '../libs/axios';

const apiClient = new ApiClient();

export async function getRegions() {
  return apiClient.get('/regions');
}

export async function getStates() {
  return apiClient.get('/states');
}

export async function getYears() {
  return apiClient.get('/years');
}

export async function getResources() {
  return apiClient.get('/resources');
}

export async function getCommitmentTerms() {
  return apiClient.get('/commitment-terms');
}

export async function getStatesByTerms({ maxStates, regionId, order }) {
  const withoutParams = maxStates === 0 && regionId === 0 && order === '';

  return apiClient.get('/commitment-terms/states-by-terms', withoutParams ? undefined : {
    maxStates, regionId, order,
  });
}

export async function getAverageVigency({ stateId, resourceId }) {
  const withoutParams = stateId === 0 && resourceId === 0;

  return apiClient.get('/commitment-terms/average-vigency', withoutParams ? undefined : {
    stateId, resourceId,
  });
}

// todas === 0
export async function getStatesByVigency({ yearId, maxStates, regionId }) {
  const withoutParams = yearId === 0 && maxStates === 0 && regionId === 0;

  return apiClient.get('/commitment-terms/states-by-vigency', withoutParams ? undefined : {
    yearId,
    maxStates,
    regionId,
  });
}

export async function getResourcesByTerm({ yearId, stateId, regionId }) {
  const withoutParams = yearId === 0 && stateId === 0 && regionId === 0;

  return apiClient.get('/commitment-terms/resources-by-term', withoutParams ? undefined : {
    yearId, stateId, regionId,
  });
}

export async function getStatesByValue({ yearId, maxStates, regionId }) {
  const withoutParams = yearId === 0 && maxStates === 0 && regionId === 0;

  return apiClient.get('/commitment-terms/states-by-value', withoutParams ? undefined : {
    yearId, maxStates, regionId,
  });
}
