import * as S from './HeaderBar.styles';
import Image from 'next/image';

export default function Headerbar(): JSX.Element {
  return (
    <S.Wrapper>
      <S.Title>Chosungram</S.Title>
      <Image src={'/navicon/Heart.png'} width={25} height={25} />
    </S.Wrapper>
  );
}
