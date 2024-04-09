import Link from 'next/link';
import * as S from './Sidebar.styles';

import Image from 'next/image';
import { useEffect, useLayoutEffect, useState } from 'react';
import axios from 'axios';
import PostBoardModal from '../../components/postboardmodal/PostBoardModal.index';
import {
  CompassFilled,
  CompassOutlined,
  HeartFilled,
  HeartOutlined,
  HomeFilled,
  HomeOutlined,
  InstagramOutlined,
  PlusSquareOutlined,
} from '@ant-design/icons';
import { useRouter } from 'next/router';
import LogoutIcon from '@mui/icons-material/Logout';
import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined';
import NearMeIcon from '@mui/icons-material/NearMe';
import useLogout from '../../services/useLogout';
import { useRecoilState, useRecoilValue } from 'recoil';
import { accesstoken, nickname, profileImageUrl } from '../../commons/globalstate/globalstate';
import { getCookie, setCookie } from '../../services/useReactCookie';
import useRefreshToken from '../../services/useRefreshToken';

export default function Sidebar(): JSX.Element {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const profileImage = useRecoilValue(profileImageUrl);
  const myNickname = useRecoilValue(nickname);
  const logout = useLogout();
  useRefreshToken();
  const openModal = () => {
    document.documentElement.style.overflowY = 'hidden';
    document.body.style.overflowY = 'hidden';
    setIsModalOpen(true);
  };
  const closeModal = () => {
    document.documentElement.style.overflowY = '';
    document.body.style.overflowY = '';
    setSelectedImage(null); // 모달을 닫을 때 이미지 선택 상태 초기화
    setIsModalOpen(false);
  };

  const handleImageSelect = (image: File | null) => {
    setSelectedImage(image);
  };

  const router = useRouter();
  const isHomePage = router.pathname === '/';
  const isExplorePage = router.pathname === '/explore' || router.pathname === '/search';
  const isMessagePage = router.pathname === '/message' || router.pathname.startsWith('/message/');
  const isNotifyPage = router.pathname === '/notify';

  return (
    <>
      <S.Wrapper>
        <S.Title>Chosungram</S.Title>
        <S.LogoBox>
          <InstagramOutlined style={{ fontSize: '24px' }} />
        </S.LogoBox>
        <S.NavBoxWrapper>
          <Link href={'/'}>
            <S.NavBox>
              {isHomePage ? <HomeFilled style={{ fontSize: '24px' }} /> : <HomeOutlined style={{ fontSize: '24px' }} />}
              <S.NavBoxText>홈</S.NavBoxText>
            </S.NavBox>
          </Link>
          <Link href={'/explore'}>
            <S.NavBox>
              {isExplorePage ? (
                <CompassFilled style={{ fontSize: '24px' }} />
              ) : (
                <CompassOutlined style={{ fontSize: '24px' }} />
              )}
              <S.NavBoxText>탐색</S.NavBoxText>
            </S.NavBox>
          </Link>
          <S.NavBox onClick={openModal}>
            <PlusSquareOutlined style={{ fontSize: '24px' }} />

            <S.NavBoxText>만들기</S.NavBoxText>
          </S.NavBox>

          <Link href={'/message'}>
            <S.NavMessageBox>
              {isMessagePage ? (
                <NearMeIcon style={{ fontSize: '31px' }} />
              ) : (
                <NearMeOutlinedIcon style={{ fontSize: '31px' }} />
              )}
              <S.NavMessageBoxText>메시지</S.NavMessageBoxText>
            </S.NavMessageBox>
          </Link>
          <Link href={'/notify'}>
            <S.ResponseImgBox>
              {isNotifyPage ? (
                <HeartFilled style={{ fontSize: '24px' }} />
              ) : (
                <HeartOutlined style={{ fontSize: '24px' }} />
              )}
              <S.NavBoxText>알림</S.NavBoxText>
            </S.ResponseImgBox>
          </Link>
          <Link href={`/user/${myNickname}`}>
            <S.NavBox>
              <Image src={profileImage || '/user.png'} alt="profile" width="24" height="24" />
              <S.NavBoxText>{myNickname}</S.NavBoxText>
            </S.NavBox>
          </Link>
          <S.Spacer />
          <S.ResponseImgBox style={{ marginBottom: '0' }} onClick={() => logout()}>
            <LogoutIcon style={{ fontSize: '30px' }} />
            <S.NavBoxText>로그아웃</S.NavBoxText>
          </S.ResponseImgBox>
        </S.NavBoxWrapper>
      </S.Wrapper>
      <PostBoardModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        onImageSelect={handleImageSelect}
        selectedImage={selectedImage}
      />
    </>
  );
}
