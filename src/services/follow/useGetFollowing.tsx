import { useQuery } from 'react-query';
import axios from 'axios';
import { getCookie } from '../login/useReactCookie';

const getFollowing = async (nickname: string, accessToken: string | null | undefined) => {
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API}/api/${nickname}/following`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return data;
};

export function useGetFollowing(nickname: string) {
  const accessToken = getCookie('accessToken');
  return useQuery(['getFollowers', nickname], () => getFollowing(nickname, accessToken), {
    enabled: !!nickname,
  });
}
