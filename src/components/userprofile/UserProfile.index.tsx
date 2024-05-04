import * as S from './UserProfile.styles';
import Link from 'next/link';
import UserStory from './userstory/UserStory.index';
import { HeartOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import PostDetailModal from './postdetailmodal/PostDetailModal.index';
import { useRecoilValue } from 'recoil';
import { nickname } from '../../commons/globalstate/globalstate';
import { useFollow } from '../../services/follow/useFollow';
import { useUnFollow } from '../../services/follow/useUnFollow';
import { useGetFollowers } from '../../services/follow/useGetFollowers';
import { useGetProfile } from '../../services/profile/useGetProfile';

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
  userNickname: string;
  userImage: string;
}

export default function UserProfile(): JSX.Element {
  const router = useRouter();
  const userNickname = router.query.userid as string;
  const myNickname = useRecoilValue(nickname);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPostId, setSelectedPostId] = useState('');
  const { data: userProfile } = useGetProfile(userNickname);
  const profile = userProfile?.data;
  const { data } = useGetFollowers(userNickname);
  const followers = data?.data;
  const { postFollow, isLoading } = useFollow();
  const { postUnFollow, isLoading: ufIsLoading } = useUnFollow();
  const [isFollowing, setIsFollowing] = useState(false);
  const [userFollowCount, setUserFollowCount] = useState<number | undefined>(undefined);
  // 팔로우 카운트 데이터로 초기화
  useEffect(() => {
    if (profile?.userFollowCount !== undefined) {
      setUserFollowCount(profile.userFollowCount);
    }
  }, [profile?.userFollowCount]);

  useEffect(() => {
    // followers 배열을 순회하여 myNickname이 존재하는지 확인
    const checkFollowing = followers?.some(
      (follower: { response: { nickname: string } }) => follower.response.nickname === myNickname
    );
    setIsFollowing(checkFollowing);
  }, [followers, myNickname]);
  const postCount = profile?.userPostCount;
  const userPosts = profile?.userPost;
  console.log(profile);
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

  //팔로우, 언팔로우
  const handleFollow = async (nickname: string) => {
    const originalIsFollowing = isFollowing; // 원래 상태 저장
    setIsFollowing(true); // 옵티미스틱 업데이트 적용
    setUserFollowCount((prevCount) => (prevCount !== undefined ? prevCount + 1 : 1)); // 팔로우 카운트 증가
    try {
      await postFollow(nickname);
    } catch (err) {
      console.error(err);
      setUserFollowCount((prevCount) => (prevCount !== undefined ? prevCount - 1 : 0)); // 팔로우 카운트 감소
      setIsFollowing(originalIsFollowing); // 요청 실패 시, 원래 상태로 롤백
    }
  };
  const handleUnFollow = async (nickname: string) => {
    const originalIsFollowing = isFollowing; // 원래 상태 저장
    setIsFollowing(false); // 옵티미스틱 업데이트 적용
    setUserFollowCount((prevCount) => (prevCount !== undefined ? prevCount - 1 : 0)); // 팔로우 카운트 감소

    try {
      await postUnFollow(nickname);
    } catch (err) {
      console.error(err);
      setUserFollowCount((prevCount) => (prevCount !== undefined ? prevCount + 1 : 1)); // 팔로우 카운트 증가
      setIsFollowing(originalIsFollowing); // 요청 실패 시, 원래 상태로 롤백
    }
  };

  return (
    <>
      <S.Wrapper>
        <S.Header>
          <S.UserId>{userNickname}</S.UserId>
          <Link href={'/notify'}>
            <HeartOutlined style={{ fontSize: '24px' }} />
          </Link>
        </S.Header>
        <S.InfoWrapper>
          <S.UserImg>
            <Image src={profile?.userImage.imageUrl || '/user.png'} layout="fill" />
          </S.UserImg>
          <S.NumBox>
            <S.Num>{profile?.userPostCount}</S.Num>
            <S.NumText>게시물</S.NumText>
          </S.NumBox>
          <Link href={`/user/${userNickname}/follower`}>
            <S.NumBox>
              <S.Num>{userFollowCount}</S.Num>
              <S.NumText>팔로워</S.NumText>
            </S.NumBox>
          </Link>
          <Link href={`/user/${userNickname}/following`}>
            <S.NumBox>
              <S.Num>{profile?.userFollowCount}</S.Num>
              <S.NumText>팔로잉</S.NumText>
            </S.NumBox>
          </Link>
        </S.InfoWrapper>
        <S.IntroduceWrapper>
          <S.Name>{userNickname}</S.Name>
          <S.Introduce>{profile?.userIntroduce}</S.Introduce>
          <S.Website href={profile?.Website} target="_blank" rel="noopener noreferrer">
            {profile?.Website}
          </S.Website>
        </S.IntroduceWrapper>
        <S.ButtonWrapper>
          {isFollowing ? (
            <S.Button onClick={() => handleUnFollow(userNickname)} disabled={ufIsLoading}>
              언팔로우
            </S.Button>
          ) : (
            <S.Button onClick={() => handleFollow(userNickname)} disabled={isLoading}>
              팔로우
            </S.Button>
          )}

          <S.Button>메시지</S.Button>
        </S.ButtonWrapper>
        <UserStory />
        <S.DivineLine />

        {postCount !== 0 && Array.isArray(userPosts) ? (
          <S.PostWrapper>
            {userPosts.map((post: Post) => (
              <S.Post key={post.postId} onClick={() => openModal(post.postId)}>
                <S.Img>
                  {post.postImageResponse.length > 0 && (
                    <Image src={post.postImageResponse[0].image.imageUrl} layout="fill" />
                  )}
                </S.Img>
              </S.Post>
            ))}
          </S.PostWrapper>
        ) : (
          <S.GuideTextWrapper>
            <S.GuideText>게시물이 없습니다.</S.GuideText>
          </S.GuideTextWrapper>
        )}
      </S.Wrapper>
      {isModalOpen && (
        <PostDetailModal
          userNickname={userNickname}
          userImage={profile?.userImage.imageUrl || '/user.png'}
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
