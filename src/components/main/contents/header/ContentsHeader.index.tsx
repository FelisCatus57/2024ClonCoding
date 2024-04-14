import Image from 'next/image';
import * as S from './ContentsHeader.styles';
import Link from 'next/link';

export interface PostData {
  nickname: string;
  userProfileImage: string;
}

export default function ContentsHeader(props: PostData): JSX.Element {
  return (
    <S.Wrapper>
      <Link href={`/user/${props.nickname}`}>
        <S.UserImg>
          <Image src={props.userProfileImage || '/user.png'} layout="fill" />
        </S.UserImg>
      </Link>
      <Link href={`/user/${props.nickname}`}>
        <S.UserInfo>
          <S.UserId>{props.nickname}</S.UserId>
          {/* <S.UserLoc>솔마루 조선대</S.UserLoc> */}
        </S.UserInfo>
      </Link>
    </S.Wrapper>
  );
}
