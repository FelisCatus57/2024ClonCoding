import { useQuery } from 'react-query';
import axios from 'axios';
import { useRecoilValue } from 'recoil';
import { accesstoken } from '../commons/globalstate/globalstate';
import { getCookie } from './useReactCookie';

const getComments = async (postId: string, accessToken: string | null | undefined) => {
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API}/api/${postId}/comment`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return data;
};

export function useGetComments(postId: string) {
  // const accessToken = useRecoilValue(accesstoken);
  const accessToken = getCookie('accessToken');
  return useQuery(['getComments', postId], () => getComments(postId, accessToken), {
    enabled: !!postId,
  });
}
