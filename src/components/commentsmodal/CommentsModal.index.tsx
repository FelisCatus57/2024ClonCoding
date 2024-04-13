import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import * as S from '../commentsmodal/CommentsModal.styles';

interface CommentsModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

export default function CommentsModal(props: CommentsModalProps) {
  const handleModalClick = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
  };

  const comments = new Array(13).fill(null).map((_, index) => ({
    id: index,
    name: `user ${index + 1}`,
  }));

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

  if (!shouldRender) return null;
  return (
    <S.ModalBackdrop onClick={props.closeModal}>
      <S.ModalContainerWrapper $isOpen={props.isOpen} onClick={handleModalClick}>
        <S.Header>댓글</S.Header>
        <S.ModalContainer>
          {comments.map((comments, index) => (
            <S.CommentWrapper key={index}>
              <S.UserImg></S.UserImg>
              <S.UserInfo>
                <S.UserId>{comments.name}</S.UserId>
                <S.UserComment>
                  댓글이에요
                  {index + 1}
                </S.UserComment>
              </S.UserInfo>
            </S.CommentWrapper>
          ))}
        </S.ModalContainer>
      </S.ModalContainerWrapper>

      <S.CloseButton>x</S.CloseButton>
    </S.ModalBackdrop>
  );
}
