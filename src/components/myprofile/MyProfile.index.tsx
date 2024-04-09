import * as S from './MyProfile.styles';
import MyStory from './story/MyStory.index';
import Link from 'next/link';
import { HeartOutlined } from '@ant-design/icons';
import { useRecoilValue } from 'recoil';
import { nickname, profileImageUrl } from '../../commons/globalstate/globalstate';
import { useGetProfile } from '../../services/useGetProfile';
import Image from 'next/image';
import useLogout from '../../services/useLogout';
import { useState } from 'react';
import PostDetailModal from './postdetailmodal/PostDetailModal.index';

interface PostImageResponse {
  image: {
    imageUrl: string;
    imageUUID: string;
  };
}

interface Post {
  postImageResponse: PostImageResponse[];
  postId: string;
  commentCount: number;
  content: string;
  postImage: string;
}

export default function MyProfile(): JSX.Element {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPostId, setSelectedPostId] = useState('');
  const myNickname = useRecoilValue(nickname);
  const myProfileImage = useRecoilValue(profileImageUrl);
  const { data } = useGetProfile(myNickname);
  const postCount = data?.data?.userPostCount;
  const userPosts = data?.data?.userPost;
  const logout = useLogout();

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
  return (
    <>
      <S.Wrapper>
        <S.Header>
          <S.UserId>{myNickname}</S.UserId>
          <Link href={'/notify'}>
            <HeartOutlined style={{ fontSize: '24px' }} />
          </Link>
        </S.Header>
        <S.InfoWrapper>
          <S.UserImg>
            <Image src={myProfileImage || '/user.png'} layout="fill" />
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
            <S.Num>{data?.data?.userFollowCount}</S.Num>
            <S.NumText>팔로잉</S.NumText>
          </S.NumBox>
        </S.InfoWrapper>
        <S.Logout onClick={() => logout()}>로그아웃</S.Logout>
        <MyStory />
        <S.DivineLine />
        {postCount !== 0 && Array.isArray(userPosts) ? (
          <S.PostWrapper>
            {userPosts.map((post: Post) => (
              <S.Post key={post.postId} onClick={() => openModal(post.postId)}>
                <S.Img>
                  {/* 배열 안의 첫 번째 이미지 객체에서 imageUrl을 가져와서 Image 컴포넌트의 src에 사용 */}
                  {post.postImageResponse.length > 0 && (
                    <Image src={post.postImageResponse[0].image.imageUrl} layout="fill" />
                  )}
                </S.Img>
              </S.Post>
            ))}
          </S.PostWrapper>
        ) : (
          <S.GuideTextWrapper>
            <S.GuideText1>친구들과의 소중한 순간을 남겨보세요</S.GuideText1>
            <S.GuideText2>첫 게시물을 만들어보세요</S.GuideText2>
          </S.GuideTextWrapper>
        )}
      </S.Wrapper>
      {isModalOpen && (
        <PostDetailModal
          isOpen={isModalOpen}
          closeModal={closeModal}
          postId={selectedPostId}
          commentCount={userPosts.find((post: { postId: string }) => post.postId === selectedPostId)?.commentCount || 0}
          content={userPosts.find((post: { postId: string }) => post.postId === selectedPostId)?.content || ''}
          postImage={
            userPosts.find((post: { postId: string }) => post.postId === selectedPostId)?.postImageResponse[0]?.image
              .imageUrl || ''
          }
        />
      )}
    </>
  );
}
