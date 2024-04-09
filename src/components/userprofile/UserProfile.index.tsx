import * as S from './UserProfile.styles';
import Link from 'next/link';
import UserStory from './userstory/UserStory.index';
import { HeartOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useGetProfile } from '../../services/useGetProfile';
import useLogout from '../../services/useLogout';
import Image from 'next/image';
import PostDetailModal from './postdetailmodal/PostDetailModal.index';
import { useFollow } from '../../services/useFollow';
import { useGetFollowers } from '../../services/useGetFollowers';
import { useRecoilValue } from 'recoil';
import { nickname } from '../../commons/globalstate/globalstate';
import { useUnFollow } from '../../services/useUnFollow';

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
  const { data } = useGetProfile(userNickname);
  const { data: followers } = useGetFollowers(userNickname);
  const { postFollow, isLoading } = useFollow();
  const { postUnFollow, isLoading: ufIsLoading } = useUnFollow();
  const [isFollowing, setIsFollowing] = useState(false);
  const [userFollowCount, setUserFollowCount] = useState<number | undefined>(undefined);

  // 팔로우 카운트 데이터로 초기화
  useEffect(() => {
    if (data?.data?.userFollowCount !== undefined) {
      setUserFollowCount(data.data.userFollowCount);
    }
  }, [data?.data?.userFollowCount]);

  useEffect(() => {
    // followers 배열을 순회하여 myNickname이 존재하는지 확인
    const checkFollowing = followers?.data.some(
      (follower: { response: { nickname: string } }) => follower.response.nickname === myNickname
    );
    setIsFollowing(checkFollowing);
  }, [followers, myNickname]);
  const postCount = data?.data?.userPostCount;
  const userPosts = data?.data?.userPost;
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

  const handleFollow = async (nickname: string) => {
    const originalIsFollowing = isFollowing; // 원래 상태 저장
    setIsFollowing(true); // 옵티미스틱 업데이트 적용
    try {
      await postFollow(nickname);
      setUserFollowCount((prevCount) => (prevCount !== undefined ? prevCount + 1 : 1)); // 팔로우 카운트 증가
      // 성공적으로 팔로우 요청을 처리했다면, UI는 이미 업데이트된 상태임
    } catch (err) {
      console.error(err);
      setIsFollowing(originalIsFollowing); // 요청 실패 시, 원래 상태로 롤백
    }
  };
  const handleUnFollow = async (nickname: string) => {
    const originalIsFollowing = isFollowing; // 원래 상태 저장
    setIsFollowing(false); // 옵티미스틱 업데이트 적용

    try {
      await postUnFollow(nickname);
      setUserFollowCount((prevCount) => (prevCount !== undefined ? prevCount - 1 : 0)); // 팔로우 카운트 감소
      // 성공적으로 언팔로우 요청을 처리했다면, UI는 이미 업데이트된 상태임
    } catch (err) {
      console.error(err);
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
            <Image src={data?.data?.userImage.imageUrl || '/user.png'} layout="fill" />
          </S.UserImg>
          <S.NumBox>
            <S.Num>{data?.data?.userPostCount}</S.Num>
            <S.NumText>게시물</S.NumText>
          </S.NumBox>
          <S.NumBox>
            <S.Num>{userFollowCount}</S.Num>
            <S.NumText>팔로워</S.NumText>
          </S.NumBox>
          <S.NumBox>
            <S.Num>{data?.data?.userFollowerCount}</S.Num>
            <S.NumText>팔로잉</S.NumText>
          </S.NumBox>
        </S.InfoWrapper>
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
            <S.GuideText1>친구들과의 소중한 순간을 남겨보세요</S.GuideText1>
            <S.GuideText2>첫 게시물을 만들어보세요</S.GuideText2>
          </S.GuideTextWrapper>
        )}
      </S.Wrapper>
      {isModalOpen && (
        <PostDetailModal
          userNickname={userNickname}
          userImage={data?.data?.userImage.imageUrl || '/user.png'}
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
