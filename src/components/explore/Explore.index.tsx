import Link from 'next/link';
import * as S from '../explore/Explore.styles';
import { SearchOutlined } from '@ant-design/icons';
import { useGetExploreBoard } from '../../services/board/useGetExploreBoard';
import Image from 'next/image';
import PostDetailModal from './postdetailmodal/PostDetailModal.index';
import { useState } from 'react';
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

export default function Explore(): JSX.Element {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPostId, setSelectedPostId] = useState('');
  const { data } = useGetExploreBoard();
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
  const userPosts = data?.data;

  console.log(userPosts);
  return (
    <>
      <S.Wrapper>
        <S.Header>
          <Link href={'/search'}>
            <S.SearchBar>
              <SearchOutlined style={{ marginRight: '8px' }} />
              검색
            </S.SearchBar>
          </Link>
        </S.Header>
        <S.PostWrapper>
          {data?.data?.map((post: PostData) => (
            <S.Post key={post.postId} onClick={() => openModal(post.postId)}>
              <S.Img>
                <Image src={post.postImageResponse[0]?.image?.imageUrl || '/navicon/user.png'} layout="fill" />
              </S.Img>
            </S.Post>
          ))}
        </S.PostWrapper>
      </S.Wrapper>
      {isModalOpen && (
        <PostDetailModal
          userNickname={
            userPosts.find((post: { postId: string }) => post.postId === selectedPostId)?.userFeedResponse.nickname || 0
          }
          userImage={
            userPosts.find((post: { postId: string }) => post.postId === selectedPostId)?.userFeedResponse
              .userProfileUrl || 0
          }
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
