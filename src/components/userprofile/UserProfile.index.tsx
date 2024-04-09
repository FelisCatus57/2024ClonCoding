import * as S from './UserProfile.styles';
import Link from 'next/link';
import UserStory from './userstory/UserStory.index';
import { HeartOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useGetProfile } from '../../services/useGetProfile';
import useLogout from '../../services/useLogout';
import Image from 'next/image';

export default function UserProfile(): JSX.Element {
  const router = useRouter();
  const userNickname = router.query.userid as string;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPostId, setSelectedPostId] = useState('');
  const { data } = useGetProfile(userNickname);
  const logout = useLogout();
  const postCount = data?.data?.userPostCount;
  const userPosts = data?.data?.userPost;
  console.log(userNickname);
  const openModal = (postId: string) => {
    document.documentElement.style.overflowY = 'hidden';
    document.body.style.overflowY = 'hidden';
    setSelectedPostId(postId);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    document.documentElement.style.overflowY = '';
    document.body.style.overflowY = '';
    setIsModalOpen(false);
  };

  console.log(data?.data?.userImage.imageUrl);
  return (
    <S.Wrapper>
      <S.Header>
        <S.UserId>{userNickname}</S.UserId>
        <Link href={'/notify'}>
          <HeartOutlined style={{ fontSize: '24px' }} />
        </Link>
      </S.Header>
      <S.InfoWrapper>
        <S.UserImg>
          <Image src={data?.data?.userImage.imageUrl || '/user.png'} layout="fill" />
        </S.UserImg>
        <S.NumBox>
          <S.Num>{data?.data?.userPostCount}</S.Num>
          <S.NumText>게시물</S.NumText>
        </S.NumBox>
        <S.NumBox>
          <S.Num>{data?.data?.userFollowerCount}</S.Num>
          <S.NumText>팔로워</S.NumText>
        </S.NumBox>
        <S.NumBox>
          <S.Num>{data?.data?.userFollowerCount}</S.Num>
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
