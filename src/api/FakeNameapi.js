// api/FakeNameAPI.js
const API_URL = 'https://randomuser.me/api/?results=5';

const FakeNameAPI = {
  getUsers: async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  },
};

export default FakeNameAPI;
