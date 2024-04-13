import { useQuery } from 'react-query';
import axios from 'axios';
import { getCookie } from '../login/useReactCookie';
import { profileImageUrl } from '../../commons/globalstate/globalstate';
import { useRecoilState } from 'recoil';

export function useGetProfile(nickname: string) {
  const [profileImage, setProfileImage] = useRecoilState<string | null | undefined>(profileImageUrl);
  const accessToken = getCookie('accessToken');

  const getProfile = async () => {
    if (!nickname || !accessToken) return; // nickname 또는 accessToken이 없으면 실행하지 않음
    const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API}/api/${nickname}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (data?.data?.userImage?.imageUrl !== profileImage) {
      setProfileImage(data?.data?.userImage?.imageUrl);
    }
    return data;
  };

  return useQuery(['getProfile', nickname], getProfile, {
    enabled: !!nickname, // nickname이 있을 경우에만 쿼리를 활성화
  });
}
