import { useState } from 'react';
import axios from 'axios';
import { getCookie } from '../login/useReactCookie';

export const usePostReply = () => {
  const [isLoading, setIsLoading] = useState(false);

  const accessToken = getCookie('accessToken');
  const postReply = async (postId: string, commentId: string, comment: string) => {
    setIsLoading(true);
    console.log(commentId);
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/api/${postId}/comment/${commentId}`,
        {
          content: comment,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      alert('답글이 등록되었습니다.');
      setIsLoading(false);
      return response.data;
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  return { postReply, isLoading };
};
