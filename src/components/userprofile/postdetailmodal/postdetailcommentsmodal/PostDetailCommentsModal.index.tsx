import React, { useEffect, useState } from 'react';
import * as S from '../postdetailcommentsmodal/PostDetailCommentsModal.styles';

import Image from 'next/image';
import { useGetComments } from '../../../../services/comment/useGetComments';
import { useDeleteComment } from '../../../../services/comment/useDeleteComment';
import { useRecoilValue } from 'recoil';
import { nickname } from '../../../../commons/globalstate/globalstate';
interface CommentsModalProps {
  isOpen: boolean;
  closeModal: () => void;
  postId: string;
}
interface Comment {
  commentId: string;
  userFeedResponse: {
    userProfileUrl: string;
    nickname: string;
  };
  userProfileUrl: string;
  nickname: string;
  content: string;
}

export default function PostDetailCommentsModal(props: CommentsModalProps) {
  const handleModalClick = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
  };

  const [shouldRender, setShouldRender] = useState<boolean>(props.isOpen);

  const myNickname = useRecoilValue(nickname);
  useEffect(() => {
    if (props.isOpen) {
      setShouldRender(true);
    } else {
      setTimeout(() => {
        setShouldRender(false);
        document.documentElement.style.overflowY = '';
        document.body.style.overflowY = '';
      }, 400);
    }
  }, [props.isOpen]);

  const { data } = useGetComments(props.postId);
  const { deleteComment } = useDeleteComment();
  const handleDeteteComment = async (postId: string, commentId: string) => {
    try {
      await deleteComment(postId, commentId);
      props.closeModal();
    } catch (err) {
      props.closeModal();
      console.error(err);
    }
  };

  //대댓글
  const [openReplyInputId, setOpenReplyInputId] = useState<string | null>(null);
  const toggleReplyInput = (commentId: string) => {
    if (openReplyInputId === commentId) {
      // 이미 열린 입력창을 닫습니다.
      setOpenReplyInputId(null);
    } else {
      // 새 입력창을 엽니다.
      setOpenReplyInputId(commentId);
    }
  };
  if (!shouldRender) return null;
  return (
    <S.ModalBackdrop onClick={props.closeModal}>
      <S.ModalContainerWrapper $isOpen={props.isOpen} onClick={handleModalClick}>
        <S.Header>댓글</S.Header>
        <S.ModalContainer>
          {data?.data.map((comment: Comment) => (
            <S.CommentWrapper key={comment.commentId}>
              <S.UserImg>
                <Image src={comment.userFeedResponse.userProfileUrl} layout="fill" />
              </S.UserImg>
              <S.UserInfo>
                <S.UserId>{comment.userFeedResponse.nickname}</S.UserId>
                <S.UserComment>{comment.content}</S.UserComment>
                <S.Reply onClick={() => toggleReplyInput(comment.commentId)}>답글 달기</S.Reply>
                {openReplyInputId === comment.commentId && (
                  <>
                    <S.InputReply placeholder="답글 달기..." />
                    <S.ReplySubmit>게시</S.ReplySubmit>
                  </>
                )}
              </S.UserInfo>

              {myNickname === comment.userFeedResponse.nickname && (
                <S.DeleteComment onClick={() => handleDeteteComment(props.postId, comment.commentId)} />
              )}
            </S.CommentWrapper>
          ))}
        </S.ModalContainer>
      </S.ModalContainerWrapper>

      <S.CloseButton>x</S.CloseButton>
    </S.ModalBackdrop>
  );
}
