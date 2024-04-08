import { useQuery } from 'react-query';
import axios from 'axios';
import { useRecoilValue } from 'recoil';
import { accesstoken } from '../commons/globalstate/globalstate';
import { get } from 'http';
import { getCookie } from './useReactCookie';

const getProfile = async (nickname: string, accessToken: string | null | undefined) => {
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API}api/${nickname}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return data;
};

export function useGetProfile(nickname: string) {
  const accessToken = getCookie('accessToken');
  // const accessToken = useRecoilValue(accesstoken);
  return useQuery(['getProfile', nickname], () => getProfile(nickname, accessToken), {
    enabled: !!nickname, // nickname이 있을 경우에만 쿼리를 활성화
  });
}
