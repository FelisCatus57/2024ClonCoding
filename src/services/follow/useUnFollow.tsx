import { useState } from 'react';
import axios from 'axios';
import { getCookie } from '../login/useReactCookie';

export const useUnFollow = () => {
  const [isLoading, setIsLoading] = useState(false);

  const accessToken = getCookie('accessToken');
  const postUnFollow = async (nickname: string) => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/api/${nickname}/unfollow`,
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log('언팔로우 완료');
      setIsLoading(false);
      return response.data;
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  return { postUnFollow, isLoading };
};
