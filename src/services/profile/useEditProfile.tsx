import axios from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { getCookie } from '../login/useReactCookie';
import { useRecoilValue } from 'recoil';
import { nickname } from '../../commons/globalstate/globalstate';
export default function useEditProfile() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const myNickname = useRecoilValue(nickname);
  const accessToken = getCookie('accessToken');

  const editProfile = async (website: string, introduce: string) => {
    setIsLoading(true);
    try {
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_API}/api/accounts/edit`,
        {
          website: website.trim() ? website : ' ',
          introduce: introduce.trim() ? introduce : ' ',
          phoneNo: '',
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      alert('수정이 완료되었습니다.');
      setIsLoading(false);
      router.push(`/user/${myNickname}`);
      return response.data;
    } catch (err) {
      console.log(err);
      alert('수정에 실패했습니다.');
      setIsLoading(false);
    }
  };

  return {
    editProfile,
    isLoading,
  };
}
