import {api} from './api';

export const addFeedApi = async ({feedRequest, image}) => {
  const res = await api.post('/feed', {feedRequest, image});
  console.log(res.data);
};

export const getFeedApi = async (page = 0, pageSize = 10) => {
  const res = await api.get(`/feed?page=${page}&pageSize=${pageSize}`);
  console.log(res);
  return res.data.result.content;
};
