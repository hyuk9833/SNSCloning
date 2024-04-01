import {create} from 'apisauce';

import Config from 'react-native-config';

const baseURL = Config.API_URL;

export const api = create({
  baseURL: baseURL,
  withCredentials: true,
});
