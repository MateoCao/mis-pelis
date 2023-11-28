import Cookies from 'js-cookie';

export const AUTH_API = {
  url: import.meta.env.VITE_APP_ENVIROMENT === 'prod'
    ? 'https://precious-red-walrus.cyclic.app'
    : 'http://localhost:1235',

  // Registro

  async registerRequest (user) {
    try {
      const response = await fetch(`${this.url}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(user)
      });
      return response;
    } catch (error) {
      console.error('Error al registrar el usuario', error);
    }
  },

  // Login

  async loginRequest (user) {
    try {
      const response = await fetch(`${this.url}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(user)
      });
      console.log(response);
      const cookies = Cookies.get();
      console.log('API', cookies);

      return response;
    } catch (error) {
      console.error('Error al logear el usuario', error);
    }
  },

  async verifyTokenRequest (token) {
    try {
      const response = await fetch(`${this.url}/verify-token`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include'
      });
      console.log(response);
      if (response.ok) {
        return response;
      }
    } catch (error) {
      console.error('Error al verificar el token');
    }
  },

  async logout () {
    try {
      const response = await fetch(`${this.url}/logout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include'
      });
      return response;
    } catch (error) {
      console.error('Error al cerrar sesión', error);
    }
  }
};
