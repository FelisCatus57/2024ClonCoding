import { useQuery } from 'react-query';
import axios from 'axios';
import { getCookie } from '../login/useReactCookie';

const getLikeUsers = async (postId: string, accessToken: string | null | undefined) => {
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API}/api/post/${postId}/like`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return data;
};

export function useGetLikeUsers(postId: string) {
  const accessToken = getCookie('accessToken');
  return useQuery(['getLikeUsers', postId], () => getLikeUsers(postId, accessToken), {
    enabled: !!postId,
  });
}
