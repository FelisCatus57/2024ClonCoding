import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import * as S from '../commentsmodal/CommentsModal.styles';

interface CommentsModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

export default function CommentsModal(props: CommentsModalProps) {
  //   if (!props.isOpen) return null;

  //   const handleModalClick = (e: { stopPropagation: () => void }) => {
  //     e.stopPropagation();
  //   };

  const comments = new Array(8).fill(null).map((_, index) => ({
    id: index,
    name: `user ${index + 1}`,
  }));

  const [isOpen, setIsOpen] = useState(props.isOpen);

  useEffect(() => {
    setIsOpen(props.isOpen);
  }, [props.isOpen]);

  const handleModalClick = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
  };

  const handleCloseModal = () => {
    // 애니메이션 효과를 적용하고 모달 상태를 업데이트합니다.
    setIsOpen(false);
    setTimeout(() => {
      props.closeModal();
    }, 300); // transition 지속 시간과 일치시킵니다.
  };

  useEffect(() => {
    setIsOpen(props.isOpen);
  }, [props.isOpen]);

  if (!isOpen) return null;
  return (
    <S.ModalBackdrop onClick={handleCloseModal}>
      <S.ModalContainer
        onClick={handleModalClick}
        style={{ transform: props.isOpen ? 'translateY(0)' : 'translateY(100%)' }}
      >
        <S.Header>댓글</S.Header>
        {comments.map((comments, index) => (
          <S.CommentWrapper>
            <S.UserImg></S.UserImg>
            <S.UserInfo>
              <S.UserId>{comments.name}</S.UserId>
              <S.UserComment>댓글이에요{index + 1}</S.UserComment>
            </S.UserInfo>
          </S.CommentWrapper>
        ))}
      </S.ModalContainer>

      <S.CloseButton>x</S.CloseButton>
    </S.ModalBackdrop>
  );
}
