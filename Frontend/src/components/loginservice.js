const axios = require('axios'); // Replace with your preferred HTTP client library

const LoginService = {
  async login(username, password) {
    try {
      const response = await axios.post('/api/login', {
        username,
        password,
      });

      if (response.status === 200) {
        const { token } = response.data; // Extract token from response
        // Store token securely (e.g., localStorage, secure storage library)
        localStorage.setItem('token', token);
        return { success: true }; // Indicate successful login
      } else {
        throw new Error(response.data.message || 'Unknown error');
      }
    } catch (error) {
      return { success: false, message: error.message }; // Return error information
    }
  },
};

export default LoginService;
