import styled from 'styled-components';
import Contents from './contents/Contents.index';
import Story from './story/Story.index';
import { useGetFollowingBoard } from '../../services/board/useGetFollowingBoard';

interface ImageInfo {
  imageUrl: string;
}

interface PostImageResponse {
  image: ImageInfo;
}

interface UserFeedResponse {
  nickname: string;
  userProfileUrl: string;
}
export interface PostData {
  commentCount: number;
  postId: string;
  content: string;
  postImageResponse: PostImageResponse[];
  postImage: string;
  userFeedResponse: UserFeedResponse;
}

export default function Main(): JSX.Element {
  const Wrapper = styled.div`
    max-width: 630px;
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  const { data } = useGetFollowingBoard();
  const boardList = data?.data;
  const Notice = styled.span`
    margin-top: 10%;
    font-size: 20px;
    font-weight: 700;
    text-align: center;
  `;
  return (
    <>
      <Wrapper>
        <Story />
        {boardList?.map((post: PostData) => (
          <Contents
            commentCount={post.commentCount}
            postId={post.postId}
            content={post.content}
            postImage={post.postImageResponse[0]?.image?.imageUrl}
            nickname={post.userFeedResponse?.nickname}
            userProfileImage={post.userFeedResponse?.userProfileUrl}
          />
        ))}
        {boardList?.length === 0 && (
          <Notice>
            게시물이 없습니다.
            <br />
            다른 유저를 팔로우 해보세요!
          </Notice>
        )}
      </Wrapper>
    </>
  );
}
