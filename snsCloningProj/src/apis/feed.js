import {api} from './api';

export const addFeedApi = async ({feedRequest, image}) => {
  const res = await api.post('/feed', {feedRequest, image});
  console.log(res);
};

export const getFeedApi = async (page = 0, pageSize = 10) => {
  const res = await api.get(`/feed?page=${page}&pageSize=${pageSize}`);
  return res.data.result.content;
};

export const getFeedDetailApi = async fieldId => {
  const res = await api.get(`/feed/${fieldId}`);
  return res.data.result;
};
