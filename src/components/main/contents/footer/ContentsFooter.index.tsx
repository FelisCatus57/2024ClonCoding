import Image from 'next/image';
import * as S from './ContentsFooter.styles';
import { UserId } from '../header/ContentsHeader.styles';
import { useInputResize } from '../../../../hooks/useInputResize';

export default function ContentsFooter(): JSX.Element {
  const { handleResizeHeight } = useInputResize();
  return (
    <S.Wrapper>
      <S.IconWrapper>
        <S.IconBox>
          <S.CursorPointer>
            <Image src={'/navicon/heart.svg'} width={24} height={24} />
          </S.CursorPointer>
          <S.CursorPointer>
            <Image src={'/navicon/message.svg'} width={24} height={24} />
          </S.CursorPointer>
          <S.CursorPointer>
            <Image src={'/navicon/emailsend.svg'} width={24} height={24} />
          </S.CursorPointer>
        </S.IconBox>
        <S.CursorPointer>
          <Image src={'/navicon/bookmark.svg'} width={27} height={27} />
        </S.CursorPointer>
      </S.IconWrapper>
      <S.Like>좋아요 520개</S.Like>
      <S.CommentBox>
        <UserId>__userid__</UserId>
        <S.Comment>귀여운 강아지</S.Comment>
      </S.CommentBox>
      <S.ShowComment>댓글 70개 모두보기</S.ShowComment>
      <S.CommentForm>
        <S.InputComment placeholder="댓글 달기..." onInput={handleResizeHeight} />
        <S.Button>게시</S.Button>
      </S.CommentForm>
    </S.Wrapper>
  );
}
