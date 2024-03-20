import axios from 'axios';

// Design Pattern: Singleton
export class ApiClient {
  constructor() {
    if (ApiClient.instance) {
      return ApiClient.instance;
    }

    this.axiosInstance = axios.create({
      baseURL: 'http://localhost:3001',
      timeout: 5000,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    ApiClient.instance = this;
  }

  async get(url, queryParams = {}) {
    try {
      const response = await this.axiosInstance.get(url, {
        params: queryParams,
      });
      return response.data;
    } catch (error) {
      throw new Error('Erro ao fazer requisição GET:', error);
    }
  }

  async post(url, data) {
    try {
      const response = await this.axiosInstance.post(url, data);
      return response.data;
    } catch (error) {
      throw new Error('Erro ao fazer requisição POST:', error);
    }
  }
}
