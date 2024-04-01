import {api} from './api';

export const search = async (searchTag, page = 0, pageSize = 10) => {
  const res = await api.get(
    `/feed/search?searchTag=${searchTag}&page=${page}&pageSize=${pageSize}`,
  );
  return res.data.result.content;
};
