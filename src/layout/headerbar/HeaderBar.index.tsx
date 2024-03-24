import Link from 'next/link';
import * as S from './HeaderBar.styles';
import Image from 'next/image';

export default function Headerbar(): JSX.Element {
  return (
    <S.Wrapper>
      <S.Title>Chosungram</S.Title>

      <Link href={'/notify'}>
        <div style={{ cursor: 'pointer' }}>
          <Image src={'/navicon/Heart.png'} width={25} height={25} />
        </div>
      </Link>
    </S.Wrapper>
  );
}
