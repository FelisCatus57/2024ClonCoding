import Link from 'next/link';
import * as S from './Sidebar.styles';

import Image from 'next/image';

export default function Sidebar(): JSX.Element {
  return (
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
        <Link href={'/postboard'}>
          <S.NavBox>
            <Image src={'/navicon/add.png'} width={22} height={22} />
            <S.NavBoxText>만들기</S.NavBoxText>
          </S.NavBox>
        </Link>
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
  );
}
