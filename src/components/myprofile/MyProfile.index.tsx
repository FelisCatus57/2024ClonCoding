import * as S from './MyProfile.styles';
import MyStory from './story/MyStory.index';
import Link from 'next/link';
import { HeartOutlined } from '@ant-design/icons';
import { useRecoilValue } from 'recoil';
import { nickname, profileImageUrl } from '../../commons/globalstate/globalstate';
import Image from 'next/image';

import { useEffect, useState } from 'react';
import PostDetailModal from './postdetailmodal/PostDetailModal.index';
import useLogout from '../../services/login/useLogout';
import { useGetProfile } from '../../services/profile/useGetProfile';
import EditImageModal from './editimagemodal/EditImageModal.index';

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
  const [isEditImgModalOpen, setIsEditImgModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [selectedPostId, setSelectedPostId] = useState('');
  const myNickname = useRecoilValue(nickname);
  const myProfileImage = useRecoilValue(profileImageUrl);
  const { data: profile } = useGetProfile(myNickname);
  const postCount = profile?.data?.userPostCount;
  const userPosts = profile?.data?.userPost;
  const logout = useLogout();

  //프로필 사진 수정
  const handleImageSelect = (image: File | null) => {
    setSelectedImage(image);
  };

  const openEditImgModal = () => {
    document.documentElement.style.overflowY = 'hidden';
    document.body.style.overflowY = 'hidden';
    setIsEditImgModalOpen(true);
  };

  const closeEditImgModal = () => {
    document.documentElement.style.overflowY = '';
    document.body.style.overflowY = '';
    setSelectedImage(null); // 모달을 닫을 때 이미지 선택 상태 초기화
    setIsEditImgModalOpen(false);
  };

  //게시물 모달 on/off
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
            <S.EditImg onClick={() => openEditImgModal()}>+</S.EditImg>
          </S.UserImg>
          <S.NumBox>
            <S.Num>{profile?.data?.userPostCount}</S.Num>
            <S.NumText>게시물</S.NumText>
          </S.NumBox>
          <Link href={`/user/${myNickname}/follower`}>
            <S.NumBox>
              <S.Num>{profile?.data?.userFollowerCount}</S.Num>
              <S.NumText>팔로워</S.NumText>
            </S.NumBox>
          </Link>
          <Link href={`/user/${myNickname}/following`}>
            <S.NumBox>
              <S.Num>{profile?.data?.userFollowCount}</S.Num>
              <S.NumText>팔로잉</S.NumText>
            </S.NumBox>
          </Link>
        </S.InfoWrapper>
        <S.IntroduceWrapper>
          <S.Name>{myNickname}</S.Name>
          <S.Introduce>{profile?.data?.userIntroduce}</S.Introduce>
          <S.Website href={profile?.data?.userWebsite} target="_blank" rel="noopener noreferrer">
            {profile?.data?.userWebsite}
          </S.Website>
        </S.IntroduceWrapper>
        <S.ButtonWrapper>
          <Link href={`/user/${myNickname}/edit`}>
            <S.Button>프로필 편집</S.Button>
          </Link>
          <S.Button onClick={() => logout()}>로그아웃</S.Button>
        </S.ButtonWrapper>
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
      {isEditImgModalOpen && (
        <EditImageModal
          isOpen={isEditImgModalOpen}
          closeModal={closeEditImgModal}
          onImageSelect={handleImageSelect}
          selectedImage={selectedImage}
        />
      )}
    </>
  );
}
