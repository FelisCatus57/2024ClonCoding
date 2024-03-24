import axios from 'axios';
import ImageUpload from '../imageupload/ImageUpload.index';
import { useState } from 'react';

import * as S from '../postboard/PostBoard.styles';
import { useInputResize } from '../../hooks/useInputResize';

export default function PostBoard(): JSX.Element {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const { handleResizeHeight } = useInputResize();

  // 이미지 업로드 핸들러
  const uploadImage = async () => {
    if (!selectedImage) {
      console.error('파일이 선택되지 않았습니다.');
      return;
    }

    const formData = new FormData();
    formData.append('image', selectedImage); // 'image'는 서버에서 요구하는 필드명에 따라 변경

    try {
      const response = await axios.post('url', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('서버 응답:', response.data);
      // 업로드 성공 후 처리
    } catch (error) {
      console.error('업로드 에러:', error);
    }
  };

  const handleImageSelect = (image: File | null) => {
    setSelectedImage(image);
  };

  return (
    <S.Wrapper>
      <ImageUpload
        title={'게시물 추가'}
        selectedImage={selectedImage}
        onImageSelect={handleImageSelect}
        uploadImage={uploadImage}
      />
      <S.InputText placeholder="내용을 작성해주세요..." onInput={handleResizeHeight} />
      <S.InputText placeholder="사진의 장소 또는 현재 계신 장소를 작성해주세요..." onInput={handleResizeHeight} />
    </S.Wrapper>
  );
}
