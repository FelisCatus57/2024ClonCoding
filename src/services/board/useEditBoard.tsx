import { useState } from 'react';
import axios from 'axios';
import { getCookie } from '../login/useReactCookie';

export const useEditBoard = () => {
  const [isLoading, setIsLoading] = useState(false);

  const accessToken = getCookie('accessToken');
  const editBoard = async (postId: string, content: string) => {
    setIsLoading(true);
    try {
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_API}/api/post/${postId}`,
        {
          content: content.trim() ? content : ' ',
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      alert('수정이 완료되었습니다.');
      setIsLoading(false);
      return response.data;
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  return { editBoard, isLoading };
};
