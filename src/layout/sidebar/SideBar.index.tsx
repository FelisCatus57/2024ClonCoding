import Link from 'next/link';
import * as S from './Sidebar.styles';

import Image from 'next/image';
import { useState } from 'react';
import axios from 'axios';
import PostBoardModal from '../../components/postboardmodal/PostBoardModal.index';

export default function Sidebar(): JSX.Element {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setSelectedImage(null); // 모달을 닫을 때 이미지 선택 상태 초기화
    setIsModalOpen(false);
  };

  const handleImageSelect = (image: File | null) => {
    setSelectedImage(image);
  };

  const uploadImage = async () => {
    if (!selectedImage) {
      console.error('파일이 선택되지 않았습니다.');
      return;
    }

    const formData = new FormData();
    formData.append('image', selectedImage);

    try {
      const response = await axios.post('url', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('서버 응답:', response.data);
      // 업로드 성공 후 처리
      closeModal(); // 업로드 성공 후 모달 닫기
    } catch (error) {
      console.error('업로드 에러:', error);
    }
  };

  return (
    <>
      <S.Wrapper>
        <S.Title>Chosungram</S.Title>
        <S.LogoBox>
          <Image src={'/navicon/logo.svg'} width={28} height={28} />
        </S.LogoBox>
        <S.NavBoxWrapper>
          <Link href={'/'}>
            <S.NavBox>
              <Image src={'/navicon/home.svg'} width={22} height={22} />
              <S.NavBoxText>홈</S.NavBoxText>
            </S.NavBox>
          </Link>
          <Link href={'/explore'}>
            <S.NavBox>
              <Image src={'/navicon/Adventures.png'} width={22} height={22} />
              <S.NavBoxText>탐색</S.NavBoxText>
            </S.NavBox>
          </Link>
          <S.NavBox onClick={openModal}>
            <Image src={'/navicon/add.png'} width={22} height={22} />
            <S.NavBoxText>만들기</S.NavBoxText>
          </S.NavBox>

          <Link href={'/message'}>
            <S.NavBox>
              <Image src={'/navicon/Email Send.png'} width={22} height={22} />
              <S.NavBoxText>메시지</S.NavBoxText>
            </S.NavBox>
          </Link>
          <Link href={'/notify'}>
            <S.ResponseImgBox>
              <Image src={'/navicon/Heart.png'} width={22} height={22} />
              <S.NavBoxText>알림</S.NavBoxText>
            </S.ResponseImgBox>
          </Link>
          <Link href={'/mypage'}>
            <S.NavBox>
              <Image src={'/navicon/user.png'} width={22} height={22} />
              <S.NavBoxText>__userid_</S.NavBoxText>
            </S.NavBox>
          </Link>
          <S.Spacer />
          <S.ResponseImgBox style={{ marginBottom: '0' }}>
            <Image src={'/navicon/Vector.svg'} width={19} height={19} />
            <S.NavBoxText>Menu</S.NavBoxText>
          </S.ResponseImgBox>
        </S.NavBoxWrapper>
      </S.Wrapper>
      <PostBoardModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        onImageSelect={handleImageSelect}
        uploadImage={uploadImage}
        selectedImage={selectedImage}
      />
    </>
  );
}
