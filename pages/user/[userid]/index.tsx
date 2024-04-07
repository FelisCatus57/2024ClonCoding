import { useRecoilValue } from 'recoil';
import { nickname } from '../../../src/commons/globalstate/globalstate';
import MyProfile from '../../../src/components/myprofile/MyProfile.index';
import UserProfile from '../../../src/components/userprofile/UserProfile.index';
import { useRouter } from 'next/router';

export default function UserProfilePage() {
  const router = useRouter();
  const routerNickname = router.query.userid;
  const myNickname = useRecoilValue(nickname);
  return routerNickname === myNickname ? <MyProfile /> : <UserProfile />;
}
