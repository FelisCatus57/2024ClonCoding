import Image from 'next/image';
import * as S from './ContentsBody.styles';

export default function ContentsBody(): JSX.Element {
  return (
    <S.Wrapper>
      {/* 테스트 이미지입니다. */}
      <Image src={'/contentstest.jpeg'} height={500} width={468} />
    </S.Wrapper>
  );
}
