import { useQuery } from 'react-query';
import axios from 'axios';
import { getCookie } from '../login/useReactCookie';
import { nickname, profileImageUrl } from '../../commons/globalstate/globalstate';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useRouter } from 'next/router';

export function useGetProfile(userNickname: string) {
  const [profileImage, setProfileImage] = useRecoilState<string | null | undefined>(profileImageUrl);
  const accessToken = getCookie('accessToken');
  const router = useRouter();
  const myNickname = useRecoilValue(nickname);
  const getProfile = async () => {
    if (!userNickname || !accessToken) return; // nickname 또는 accessToken이 없으면 실행하지 않음
    const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API}/api/${userNickname}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    if (myNickname === router.query.userid && data?.data?.userImage?.imageUrl !== profileImage) {
      setProfileImage(data?.data?.userImage?.imageUrl);
    }
    return data;
  };

  return useQuery(['getProfile', userNickname], getProfile, {
    enabled: !!nickname, // nickname이 있을 경우에만 쿼리를 활성화
  });
}
