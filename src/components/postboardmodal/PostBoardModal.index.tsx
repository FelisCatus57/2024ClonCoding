import React from 'react';
import Image from 'next/image';
import * as S from '../postboardmodal/PostBoardModal.styles';

interface PostBoardModalProps {
  isOpen: boolean;
  closeModal: () => void;
  onImageSelect: (image: File | null) => void;
  uploadImage: () => Promise<void>;
  selectedImage: File | null;
}

export default function PostBoardModal(props: PostBoardModalProps) {
  if (!props.isOpen) return null;

  const preview = props.selectedImage ? URL.createObjectURL(props.selectedImage) : '';

  const handleModalClick = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
  };

  return (
    <S.ModalBackdrop onClick={props.closeModal}>
      <S.ModalContainer onClick={handleModalClick}>
        <S.Header>
          새 게시물 만들기
          <S.UploadButton onClick={props.uploadImage} disabled={!props.selectedImage}>
            게시
          </S.UploadButton>
        </S.Header>
        {preview ? (
          <S.PreviewContainer>
            <Image src={preview} alt="Image preview" layout="fill" objectFit="cover" />
          </S.PreviewContainer>
        ) : (
          <S.FileInputLabel htmlFor="file-upload">
            사진을 <br />
            선택해주세요!
          </S.FileInputLabel>
        )}
        <S.StyledInput
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={(e) => props.onImageSelect(e.target.files ? e.target.files[0] : null)}
        />
        <S.InputText style={{ marginTop: '20px' }} placeholder="내용을 작성해주세요" />
        <S.InputText placeholder="사진 속 장소를 작성해주세요" />
      </S.ModalContainer>
      <S.CloseButton>x</S.CloseButton>
    </S.ModalBackdrop>
  );
}
