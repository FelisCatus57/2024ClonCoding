import { useState } from 'react';
import axios from 'axios';
import { getCookie } from '../login/useReactCookie';

export const useFollow = () => {
  const [isLoading, setIsLoading] = useState(false);

  const accessToken = getCookie('accessToken');
  const postFollow = async (nickname: string) => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/api/${nickname}/follow`,
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log('팔로우 완료');
      setIsLoading(false);
      return response.data;
    } catch (err) {
      console.error(err);
      setIsLoading(false);
      throw err;
    }
  };

  return { postFollow, isLoading };
};
