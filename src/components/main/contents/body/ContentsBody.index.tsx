import Image from 'next/image';
import * as S from './ContentsBody.styles';

export interface PostData {
  postImage: string;
}

export default function ContentsBody(props: PostData): JSX.Element {
  return (
    <S.Wrapper>
      <Image src={props.postImage || '/navicon/user.png'} alt="이미지가 없습니다" height={500} width={468} />
    </S.Wrapper>
  );
}
