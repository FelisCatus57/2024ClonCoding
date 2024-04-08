import { useState } from 'react';
import axios from 'axios';
import { getCookie } from './useReactCookie';

export const usePostBoard = () => {
  const [isLoading, setIsLoading] = useState(false);

  const accessToken = getCookie('accessToken');
  const postComment = async (content: string, Image: FormData) => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/api/post`,
        {
          content: content,
          files: Image,
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
