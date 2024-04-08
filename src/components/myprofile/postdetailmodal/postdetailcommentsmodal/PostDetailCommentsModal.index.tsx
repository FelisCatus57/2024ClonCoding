import React, { useEffect, useState } from 'react';
import * as S from '../postdetailcommentsmodal/PostDetailCommentsModal.styles';
import { useGetComments } from '../../../../services/useGetComments';
import Image from 'next/image';
interface CommentsModalProps {
  isOpen: boolean;
  closeModal: () => void;
  postId: string;
}

export default function PostDetailCommentsModal(props: CommentsModalProps) {
  const handleModalClick = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
  };

  const [shouldRender, setShouldRender] = useState<boolean>(props.isOpen);

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
  if (!shouldRender) return null;
  return (
    <S.ModalBackdrop onClick={props.closeModal}>
      <S.ModalContainer $isOpen={props.isOpen} onClick={handleModalClick}>
        <S.Header>댓글</S.Header>
        {data?.data.map((comment: any, index: any) => (
          <S.CommentWrapper key={comment.commentId}>
            <S.UserImg>
              <Image src={comment.userFeedResponse.userProfileUrl} layout="fill" />
            </S.UserImg>
            <S.UserInfo>
              <S.UserId>{comment.userFeedResponse.nickname}</S.UserId>
              <S.UserComment>{comment.content}</S.UserComment>
            </S.UserInfo>
          </S.CommentWrapper>
        ))}
      </S.ModalContainer>

      <S.CloseButton>x</S.CloseButton>
    </S.ModalBackdrop>
  );
}
