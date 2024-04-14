import { useQuery } from 'react-query';
import axios from 'axios';
import { getCookie } from '../login/useReactCookie';

const getExploreBoard = async (accessToken: string | null | undefined) => {
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API}/api/explorePost`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return data;
};

export function useGetExploreBoard() {
  const accessToken = getCookie('accessToken');
  return useQuery(['getExploreBoard'], () => getExploreBoard(accessToken), {
    enabled: !!accessToken,
  });
}
