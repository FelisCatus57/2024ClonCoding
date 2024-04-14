import { useQuery } from 'react-query';
import axios from 'axios';
import { getCookie } from '../login/useReactCookie';

const getFollowingBoard = async (accessToken: string | null | undefined) => {
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API}/api/followingPost`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return data;
};

export function useGetFollowingBoard() {
  const accessToken = getCookie('accessToken');
  return useQuery(['getFollowingBoard'], () => getFollowingBoard(accessToken), {
    enabled: !!accessToken,
  });
}
