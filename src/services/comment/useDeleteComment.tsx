import { useState } from 'react';
import axios from 'axios';
import { getCookie } from '../login/useReactCookie';

export const useDeleteComment = () => {
  const [isLoading, setIsLoading] = useState(false);

  const accessToken = getCookie('accessToken');
  const deleteComment = async (postId: string, commentId: string) => {
    setIsLoading(true);
    try {
      const response = await axios.delete(`${process.env.NEXT_PUBLIC_API}/api/${postId}}/comment/${commentId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      alert('댓글이 삭제되었습니다.');
      setIsLoading(false);
      return response.data;
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  return { deleteComment, isLoading };
};
