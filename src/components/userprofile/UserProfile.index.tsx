import Image from 'next/image';
import * as S from './UserProfile.styles';
import Link from 'next/link';
import UserStory from './userstory/UserStory.index';

export default function UserProfile(): JSX.Element {
  return (
    <S.Wrapper>
      <S.Header>
        <S.UserId>__userid__</S.UserId>
        <Link href={'/notify'}>
          <div style={{ cursor: 'pointer' }}>
            <Image src={'/navicon/Heart.png'} width={25} height={25} />
          </div>
        </Link>
      </S.Header>
      <S.InfoWrapper>
        <S.UserImg />
        <S.NumBox>
          <S.Num>0</S.Num>
          <S.NumText>게시물</S.NumText>
        </S.NumBox>
        <S.NumBox>
          <S.Num>204</S.Num>
          <S.NumText>팔로워</S.NumText>
        </S.NumBox>
        <S.NumBox>
          <S.Num>209</S.Num>
          <S.NumText>팔로잉</S.NumText>
        </S.NumBox>
      </S.InfoWrapper>
      <S.ButtonWrapper>
        <S.Button>팔로우</S.Button>
        <S.Button>메시지</S.Button>
      </S.ButtonWrapper>
      <UserStory />
      <S.DivineLine />

      {/* 게시물이 없다면 해당 UI */}
      <S.GuideTextWrapper>
        <S.GuideText1>친구들과의 소중한 순간을 남겨보세요</S.GuideText1>
        <S.GuideText2>첫 게시물을 만들어보세요</S.GuideText2>
      </S.GuideTextWrapper>

      {/* 게시물이 있다면 해당 UI */}
      {/* <S.PostWrapper>
        <S.Post>
          <S.Img></S.Img>
        </S.Post>
        <S.Post>
          <S.Img></S.Img>
        </S.Post>
        <S.Post>
          <S.Img></S.Img>
        </S.Post>
        <S.Post>
          <S.Img></S.Img>
        </S.Post>
      </S.PostWrapper> */}
      {/* 게시물이 있다면 해당 UI */}
    </S.Wrapper>
  );
}
