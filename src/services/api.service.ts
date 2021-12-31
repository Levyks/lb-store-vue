import axios from 'axios';

axios.defaults.baseURL = 'https://demo-store.marciolevy.repl.co/api';

class ApiService {
  static get(url: string, params?: any) {
    return axios.get(url, { params }).then(r => r.data);
  }

  static post(url: string, data?: any) {
    return axios.post(url, data).then(r => r.data);
  }

  static put(url: string, data?: any) {
    return axios.put(url, data).then(r => r.data);
  }

  static delete(url: string, data?: any) {
    return axios.delete(url, data).then(r => r.data);
  }
}

export default ApiService;