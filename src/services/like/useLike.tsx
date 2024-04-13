import { useState } from 'react';
import axios from 'axios';
import { getCookie } from '../login/useReactCookie';

export const useLike = () => {
  const [isLoading, setIsLoading] = useState(false);

  const accessToken = getCookie('accessToken');
  const postLike = async (postId: string) => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/api/post/${postId}/like`,
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log('좋아요 완료');
      setIsLoading(false);
      return response.data;
    } catch (err) {
      console.error(err);
      setIsLoading(false);
      throw err;
    }
  };

  return { postLike, isLoading };
};
