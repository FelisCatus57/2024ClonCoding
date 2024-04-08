import { useState } from 'react';
import axios from 'axios';
import { getCookie } from './useReactCookie';

export const usePostComment = () => {
  const [isLoading, setIsLoading] = useState(false);

  const accessToken = getCookie('accessToken');
  const postComment = async (postId: string, comment: string) => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/api/${postId}/comment`,
        {
          content: comment,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      setIsLoading(false);
      return response.data;
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  return { postComment, isLoading };
};
