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
            <S.NavBoxText>Home</S.NavBoxText>
          </S.NavBox>
        </Link>
        <Link href={'/explore'}>
          <S.NavBox>
            <Image src={'/navicon/Adventures.png'} width={22} height={22} />
            <S.NavBoxText>Explore</S.NavBoxText>
          </S.NavBox>
        </Link>
        <S.NavBox>
          <Image src={'/navicon/Cinema.png'} width={22} height={22} />
          <S.NavBoxText>Reels</S.NavBoxText>
        </S.NavBox>
        <Link href={'/message'}>
          <S.NavBox>
            <Image src={'/navicon/Email Send.png'} width={22} height={22} />
            <S.NavBoxText>Message</S.NavBoxText>
          </S.NavBox>
        </Link>
        <Link href={'/notify'}>
          <S.ResponseImgBox>
            <Image src={'/navicon/Heart.png'} width={22} height={22} />
            <S.NavBoxText>Alarm</S.NavBoxText>
          </S.ResponseImgBox>
        </Link>
        <Link href={'/mypage'}>
          <S.NavBox>
            <Image src={'/navicon/user.png'} width={22} height={22} />
            <S.NavBoxText>User</S.NavBoxText>
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
