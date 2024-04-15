import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import * as S from '../postdetailmodal/PostDetailModal.styles';
import { useRecoilValue } from 'recoil';
import { nickname, profileImageUrl } from '../../../commons/globalstate/globalstate';
import {
  BookFilled,
  BookOutlined,
  HeartOutlined,
  HeartTwoTone,
  MessageOutlined,
  SendOutlined,
} from '@ant-design/icons';
import TurnedInNotOutlinedIcon from '@mui/icons-material/TurnedInNotOutlined';
import TurnedInOutlinedIcon from '@mui/icons-material/TurnedInOutlined';
import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined';
import { useInputResize } from '../../../hooks/useInputResize';
import { UserId } from '../../main/contents/header/ContentsHeader.styles';
import PostDetailCommentsModal from './postdetailcommentsmodal/PostDetailCommentsModal.index';
import { usePostComment } from '../../../services/comment/usePostComment';
import { useGetLikeUsers } from '../../../services/like/useGetLikeUsers';
import { useLike } from '../../../services/like/useLike';
import { useUnLike } from '../../../services/like/useUnLike';

interface PostBoardModalProps {
  isOpen: boolean;
  closeModal: () => void;
  postId: string;
  commentCount: number;
  content: string;
  postImage: string;
  userNickname: string;
  userImage: string;
}

export default function PostDetailModal(props: PostBoardModalProps) {
  if (!props.isOpen) return null;
  const { handleResizeHeight } = useInputResize();
  const handleModalClick = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
  };

  const myNickname = useRecoilValue(nickname);

  //좋아요
  const { data: likeUsers } = useGetLikeUsers(props.postId);
  const { postLike, isLoading: likeLoading } = useLike();
  const { postUnLike, isLoading: unLikeLoading } = useUnLike();
  const [isLike, setIsLike] = useState(false);
  const [userLikeCount, setUserLikeCount] = useState<number | undefined>(undefined);

  //좋아요 카운트 데이터로 초기화
  useEffect(() => {
    if (likeUsers?.data?.length !== undefined) {
      setUserLikeCount(likeUsers.data.length);
    }
  }, [likeUsers?.data?.length]);

  //좋아요 확인
  useEffect(() => {
    // myNickname이 data 배열 내에 존재하는지 확인합니다.
    const checkLike = likeUsers?.data?.some((user: { nickname: string }) => user.nickname === myNickname);
    setIsLike(checkLike);
  }, [likeUsers, myNickname]);

  // 좋아요 / 좋아요 취소
  const handleLike = async (postId: string) => {
    const originalIsLike = isLike; // 원래 상태 저장
    setIsLike(true); // 옵티미스틱 업데이트 적용
    setUserLikeCount((prevCount) => (prevCount !== undefined ? prevCount + 1 : 1)); // 팔로우 카운트 증가
    try {
      await postLike(postId);
    } catch (err) {
      console.error(err);
      console.log('함수에러');
      setUserLikeCount((prevCount) => (prevCount !== undefined ? prevCount - 1 : 0)); // 팔로우 카운트 감소
      setIsLike(originalIsLike); // 요청 실패 시, 원래 상태로 롤백
    }
  };
  const handleUnLike = async (postId: string) => {
    const originalIsLike = isLike; // 원래 상태 저장
    setIsLike(false); // 옵티미스틱 업데이트 적용
    setUserLikeCount((prevCount) => (prevCount !== undefined ? prevCount - 1 : 1)); // 팔로우 카운트 증가
    try {
      await postUnLike(postId);
    } catch (err) {
      console.error(err);
      setUserLikeCount((prevCount) => (prevCount !== undefined ? prevCount + 1 : 0)); // 팔로우 카운트 감소
      setIsLike(originalIsLike); // 요청 실패 시, 원래 상태로 롤백
    }
  };

  //댓글 모달 on/off
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    document.documentElement.style.overflowY = 'hidden';
    document.body.style.overflowY = 'hidden';
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  //댓글 등록
  const [comment, setComment] = useState('');
  const { postComment, isLoading: commentLoading } = usePostComment();
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!comment.trim()) return;
    try {
      await postComment(props.postId, comment);
      setComment('');
    } catch (err) {
      console.error('Error posting comment:', err);
    }
  };

  return (
    <S.ModalBackdrop onClick={props.closeModal}>
      <S.ModalContainer onClick={handleModalClick}>
        <S.Header>
          <S.UserImg>
            <Image src={props.userImage || '/navicon/user.png'} layout="fill" />
          </S.UserImg>
          <S.UserInfo>
            <S.UserId>{props.userNickname}</S.UserId>
            {/* <S.UserLoc></S.UserLoc> */}
          </S.UserInfo>
        </S.Header>
        <S.ImageWrapper>
          <Image src={props.postImage || '/navicon/user.png'} layout="fill" />
        </S.ImageWrapper>
        <S.FooterWrapper>
          <S.IconWrapper>
            <S.IconBox>
              <S.CursorPointer>
                {isLike ? (
                  <HeartTwoTone
                    twoToneColor="#eb2f96"
                    style={{ fontSize: '26px' }}
                    onClick={() => handleUnLike(props.postId)}
                  />
                ) : (
                  <HeartOutlined style={{ fontSize: '26px' }} onClick={() => handleLike(props.postId)} />
                )}
              </S.CursorPointer>
              <S.CursorPointer style={{ marginLeft: '4%' }}>
                <MessageOutlined onClick={openModal} style={{ fontSize: '24px' }} />
              </S.CursorPointer>
              <S.CursorPointer>
                <NearMeOutlinedIcon style={{ fontSize: '31px' }} />
              </S.CursorPointer>
            </S.IconBox>
            <S.CursorPointer>
              <TurnedInNotOutlinedIcon style={{ fontSize: '31px' }} />
              {/* 유저가 북마크 클릭시 */}
              {/* <TurnedInOutlinedIcon style={{ fontSize: '31px' }} /> */}
            </S.CursorPointer>
          </S.IconWrapper>
          <S.Like>좋아요 {userLikeCount}개</S.Like>
          <S.CommentBox>
            <UserId>{props.userNickname}</UserId>
            <S.Comment>{props.content}</S.Comment>
          </S.CommentBox>
          <S.ShowComment onClick={openModal}>댓글 {props.commentCount}개 모두보기</S.ShowComment>
          <S.CommentForm onSubmit={handleSubmit}>
            <S.InputComment
              placeholder="댓글 달기..."
              onInput={handleResizeHeight}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <S.Button type="submit" disabled={commentLoading}>
              게시
            </S.Button>
          </S.CommentForm>
        </S.FooterWrapper>
        <PostDetailCommentsModal isOpen={isModalOpen} closeModal={closeModal} postId={props.postId} />
      </S.ModalContainer>
      <S.CloseButton>x</S.CloseButton>
    </S.ModalBackdrop>
  );
}
