import axios from 'axios';
import { Auth0ContextInterface, User } from '@auth0/auth0-react';

const baseURL = import.meta.env.VITE_API_SERVER_URL;

const api = axios.create({
  baseURL
});

let auth0: Auth0ContextInterface<User> | null = null;

export const setAuth0 = (auth0Instance: Auth0ContextInterface<User>) => {
  auth0 = auth0Instance;
};

api.interceptors.request.use(async (config) => {
  if (auth0) {
    if (auth0.isAuthenticated) {
      try {
        const token = await auth0.getAccessTokenSilently();
        console.log(token);
        config.headers.Authorization = `Bearer ${token}`;
      } catch (error) {
        console.error('Error getting token:', error);
      }
    } else {
      console.log('User is not authenticated');
    }
  } else {
    console.log('Auth0 is not set');
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default api;
