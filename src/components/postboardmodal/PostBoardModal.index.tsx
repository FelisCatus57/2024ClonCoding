import React, { useState } from 'react';
import Image from 'next/image';
import * as S from '../postboardmodal/PostBoardModal.styles';
import { useInputResize } from '../../hooks/useInputResize';
import { getCookie } from '../../services/useReactCookie';
import axios from 'axios';

interface PostBoardModalProps {
  isOpen: boolean;
  closeModal: () => void;
  onImageSelect: (image: File | null) => void;
  selectedImage: File | null;
}

export default function PostBoardModal(props: PostBoardModalProps) {
  if (!props.isOpen) return null;
  const { handleResizeHeight } = useInputResize();
  const preview = props.selectedImage ? URL.createObjectURL(props.selectedImage) : '';

  const handleModalClick = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
  };
  const [isLoading, setIsLoading] = useState(false);
  const [content, setContent] = useState('' as string);
  const accessToken = getCookie('accessToken');
  const postBoard = async (content: string, Image: File | null) => {
    if (!Image) {
      alert('이미지를 첨부해주세요');
      return;
    }
    setIsLoading(true);
    const formData = new FormData();
    formData.append('files', Image);
    formData.append('content', content);
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API}/api/post`, formData, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      setIsLoading(false);
      props.closeModal();
      alert('게시물이 등록되었습니다.');
      return response.data;
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };
  return (
    <S.ModalBackdrop onClick={props.closeModal}>
      <S.ModalContainer onClick={handleModalClick}>
        <S.Header>
          새 게시물 만들기
          <S.UploadButton onClick={() => postBoard(content, props.selectedImage)} disabled={isLoading}>
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
        <S.InputText
          onInput={handleResizeHeight}
          onChange={(e) => setContent(e.target.value)}
          style={{ marginTop: '20px' }}
          placeholder="내용을 작성해주세요"
        />
        {/* <S.InputText placeholder="사진 속 장소를 작성해주세요" /> */}
      </S.ModalContainer>
      <S.CloseButton>x</S.CloseButton>
    </S.ModalBackdrop>
  );
}
