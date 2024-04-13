import React, { useState } from 'react';
import * as S from './EditImageModal.styles';
import Image from 'next/image';
import { getCookie } from '../../../services/login/useReactCookie';
import axios from 'axios';

interface EditImgModalProps {
  isOpen: boolean;
  closeModal: () => void;
  onImageSelect: (image: File | null) => void;
  selectedImage: File | null;
}

export default function EditImageModal(props: EditImgModalProps) {
  if (!props.isOpen) return null;
  const preview = props.selectedImage ? URL.createObjectURL(props.selectedImage) : '';

  const handleModalClick = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
  };

  const [isLoading, setIsLoading] = useState(false);
  const accessToken = getCookie('accessToken');

  const editImage = async (Image: File | null) => {
    if (!Image) {
      alert('이미지를 첨부해주세요');
      return;
    }
    setIsLoading(true);
    const formData = new FormData();
    formData.append('image', Image);
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API}/api/accounts/image`, formData, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      setIsLoading(false);
      props.closeModal();
      alert('사진이 등록되었습니다.');
      return response.data;
    } catch (err: any) {
      alert(err?.response?.data?.message);
      setIsLoading(false);
    }
  };

  return (
    <S.ModalBackdrop onClick={props.closeModal}>
      <S.ModalContainer onClick={handleModalClick}>
        <S.Header>
          프로필 사진 변경
          <S.UploadButton onClick={() => editImage(props.selectedImage)} disabled={!props.selectedImage || isLoading}>
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
      </S.ModalContainer>
      <S.CloseButton>x</S.CloseButton>
    </S.ModalBackdrop>
  );
}
