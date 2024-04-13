import { useQuery } from 'react-query';
import axios from 'axios';
import { getCookie } from '../login/useReactCookie';

const getSearch = async (searchNickname: string, accessToken: string | null | undefined) => {
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API}/api/accounts/search`, {
    params: { keyword: searchNickname },
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return data;
};

export function useGetSearch(searchNickname: string) {
  const accessToken = getCookie('accessToken');
  return useQuery(['getSearch', searchNickname], () => getSearch(searchNickname, accessToken), {
    enabled: !!searchNickname,
  });
}
