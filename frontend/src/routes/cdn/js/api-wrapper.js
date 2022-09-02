const API = {
  GET: async (route, token) => {
    return await fetch(baseUrl + route);
  },

  POST: async (route, body, token) => {
    return await fetch(baseUrl + route, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(body),
    });
  },

  PUT: async (route, body, token) => {
    return await fetch(baseUrl + route, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(body),
    });
  },

  DELETE: async (route, body, token) => {
    return await fetch(baseUrl + route, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(body),
    });
  },
};
