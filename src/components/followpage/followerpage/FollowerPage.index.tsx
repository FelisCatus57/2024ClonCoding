import { ArrowLeftOutlined } from '@ant-design/icons';
import { useRouterBack } from '../../../hooks/useRouterBack';
import * as S from './FollowerPage.styles';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useGetFollowers } from '../../../services/follow/useGetFollowers';
import Link from 'next/link';

interface User {
  response: {
    userId: string;
    nickname: string;
    profileImgUrl: string;
  };
}
export default function FollowerPage(): JSX.Element {
  const goBack = useRouterBack();
  const router = useRouter();
  const userNickname = router.query.userid as string;
  const { data } = useGetFollowers(userNickname);
  const followerUsers = data?.data;
  return (
    <S.Wrapper>
      <S.Header>
        <ArrowLeftOutlined onClick={goBack} style={{ marginRight: '30px', cursor: 'pointer', marginTop: '4px' }} />
        팔로워
      </S.Header>

      {followerUsers?.map((user: User) => (
        <Link href={`/user/${user.response.nickname}`} key={user.response.userId}>
          <S.UserBox key={user.response.userId}>
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
