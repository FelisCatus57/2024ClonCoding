import { useState } from 'react';
import axios from 'axios';
import { getCookie } from '../login/useReactCookie';

export const useDeleteBoard = () => {
  const [isLoading, setIsLoading] = useState(false);

  const accessToken = getCookie('accessToken');
  const deleteBoard = async (postId: string) => {
    setIsLoading(true);
    try {
      const response = await axios.delete(`${process.env.NEXT_PUBLIC_API}/api/post/${postId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      alert('게시물이 삭제되었습니다.');
      setIsLoading(false);
      return response.data;
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  return { deleteBoard, isLoading };
};
