import {api} from './api';

export const login = async () => {
  const res = await api.post('/auth', {
    email: 'wjdgur0224@gmail.com',
    password: 'Qwer1234@',
  });
  console.log(res.data);
};

export const joinUs = async () => {
  const res = await api.post('/accounts', {
    email: 'hyuk9833@naver.com',
    password: 'Qwer1234@',
    nickname: 'ohjeonghyeok',
    phonenNumber: '01014224124',
  });
  // console.log(res);
};
