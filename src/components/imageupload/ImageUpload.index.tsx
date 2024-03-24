import axios from 'axios';
import { useState } from 'react';
import * as S from './ImageUpload.styles';
import Image from 'next/image';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';
import { useRouterBack } from '../../hooks/useRouterBack';

interface ImageUploadProps {
  title: string;
  onImageSelect: (image: File | null) => void; // 이미지가 선택될 때 실행될 콜백 함수
  uploadImage: () => void;
  selectedImage: File | null; // 선택된 이미지 파일
}

export default function ImageUpload(props: ImageUploadProps): JSX.Element {
  const [preview, setPreview] = useState('');
  const goBack = useRouterBack();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      props.onImageSelect(img); // 부모 컴포넌트의 상태를 업데이트
      setPreview(URL.createObjectURL(img)); // 미리보기 생성
    }
  };
  return (
    <S.Wrapper>
      <S.Header>
        <ArrowLeftOutlined onClick={goBack} style={{ marginRight: '30px', cursor: 'pointer', marginTop: '4px' }} />
        {props.title}
        <S.UploadButton onClick={props.uploadImage} disabled={!props.selectedImage}>
          게시
        </S.UploadButton>
      </S.Header>
      {preview ? (
        <S.PreviewContainer>
          <Image src={preview} alt="Image preview" layout="fill" objectFit="cover" />
        </S.PreviewContainer>
      ) : (
        <S.FileInputLabel htmlFor="file-upload">Choose Image</S.FileInputLabel>
      )}
      <S.StyledInput id="file-upload" type="file" accept="image/*" onChange={handleImageChange} />
    </S.Wrapper>
  );
}
