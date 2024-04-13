import { useState } from 'react';
import axios from 'axios';
import { getCookie } from '../login/useReactCookie';

export const useUnLike = () => {
  const [isLoading, setIsLoading] = useState(false);

  const accessToken = getCookie('accessToken');
  const postUnLike = async (postId: string) => {
    setIsLoading(true);
    try {
      const response = await axios.delete(
        `${process.env.NEXT_PUBLIC_API}/api/post/${postId}/unlike`,

        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log('좋아요 취소');
      setIsLoading(false);
      return response.data;
    } catch (err) {
      console.error(err);
      setIsLoading(false);
      throw err;
    }
  };

  return { postUnLike, isLoading };
};
