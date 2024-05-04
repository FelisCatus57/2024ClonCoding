import { ArrowLeftOutlined } from '@ant-design/icons';
import { useRouterBack } from '../../../hooks/useRouterBack';
import * as S from './FollowingPage.styles';
import { useGetFollowing } from '../../../services/follow/useGetFollowing';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

interface User {
  response: {
    userId: string;
    nickname: string;
    profileImgUrl: string;
  };
}
export default function FollowingPage(): JSX.Element {
  const goBack = useRouterBack();
  const router = useRouter();
  const userNickname = router.query.userid as string;
  const { data } = useGetFollowing(userNickname);
  const followUsers = data?.data;
  return (
    <S.Wrapper>
      <S.Header>
        <ArrowLeftOutlined onClick={goBack} style={{ marginRight: '30px', cursor: 'pointer', marginTop: '4px' }} />
        팔로잉
      </S.Header>

      {followUsers?.map((user: User) => (
        <Link href={`/user/${user.response.nickname}`} key={user.response.userId}>
          <S.UserBox>
            <S.UserImg>
              <Image src={user.response.profileImgUrl || '/user.png'} layout="fill" />
            </S.UserImg>
            <S.NotifyMessage>{user.response.nickname}</S.NotifyMessage>
          </S.UserBox>
        </Link>
      ))}
    </S.Wrapper>
  );
}
