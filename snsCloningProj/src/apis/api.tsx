import axios from 'axios';

import Config from 'react-native-config';

const api = async () => {
  console.log(`${Config.API_URL}/feed`);
  try {
    const data = await axios.get(`${Config.API_URL}/feed`, {
      params: {
        page: 0,
        pageSize: 10,
      },
    });
    console.log(data);
  } catch {
    console.log('catch');
  }
};

export default api;
