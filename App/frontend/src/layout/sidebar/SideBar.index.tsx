import * as S from './Sidebar.styles';

import Image from 'next/image';

export default function Sidebar(): JSX.Element {
  return (
    <S.Wrapper>
      <S.Title>Chosungram</S.Title>
      <S.NavBoxWrapper>
        <S.NavBox>
          <Image src={'/navicon/home.svg'} width={24} height={24} />
          <S.NavBoxText>Home</S.NavBoxText>
        </S.NavBox>
        <S.NavBox>
          <Image src={'/navicon/search.svg'} width={24} height={24} />
          <S.NavBoxText>Search</S.NavBoxText>
        </S.NavBox>
        <S.NavBox>
          <Image src={'/navicon/Adventures.png'} width={24} height={24} />
          <S.NavBoxText>Explore</S.NavBoxText>
        </S.NavBox>
        <S.NavBox>
          <Image src={'/navicon/Cinema.png'} width={24} height={24} />
          <S.NavBoxText>Reels</S.NavBoxText>
        </S.NavBox>
        <S.NavBox>
          <Image src={'/navicon/Email Send.png'} width={24} height={24} />
          <S.NavBoxText>Message</S.NavBoxText>
        </S.NavBox>
        <S.NavBox>
          <Image src={'/navicon/Heart.png'} width={24} height={24} />
          <S.NavBoxText>Alarm</S.NavBoxText>
        </S.NavBox>
        <S.NavBox>
          <Image src={'/navicon/user.png'} width={24} height={24} />
          <S.NavBoxText>User</S.NavBoxText>
        </S.NavBox>
        <S.Spacer />
        <S.NavBox style={{ marginBottom: '0' }}>
          <Image src={'/navicon/Vector.svg'} width={19} height={19} />
          <S.NavBoxText>Menu</S.NavBoxText>
        </S.NavBox>
      </S.NavBoxWrapper>
    </S.Wrapper>
  );
}
