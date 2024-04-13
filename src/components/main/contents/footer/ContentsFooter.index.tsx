import * as S from '../footer/ContentsFooter.styles';
import { UserId } from '../header/ContentsHeader.styles';
import { useInputResize } from '../../../../hooks/useInputResize';
import {
  BookFilled,
  BookOutlined,
  HeartOutlined,
  HeartTwoTone,
  MessageOutlined,
  SendOutlined,
} from '@ant-design/icons';
import TurnedInNotOutlinedIcon from '@mui/icons-material/TurnedInNotOutlined';
import TurnedInOutlinedIcon from '@mui/icons-material/TurnedInOutlined';
import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined';
import { useState } from 'react';
import CommentsModal from '../../../commentsmodal/CommentsModal.index';

export default function ContentsFooter(): JSX.Element {
  const { handleResizeHeight } = useInputResize();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    document.documentElement.style.overflowY = 'hidden';
    document.body.style.overflowY = 'hidden';
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <S.Wrapper>
        <S.IconWrapper>
          <S.IconBox>
            <S.CursorPointer>
              <HeartOutlined style={{ fontSize: '26px' }} />
              {/* 유저가 하트 클릭시 */}
              {/* <HeartTwoTone twoToneColor="#eb2f96" style={{ fontSize: '24px' }} /> */}
            </S.CursorPointer>
            <S.CursorPointer style={{ marginLeft: '4%' }}>
              <MessageOutlined style={{ fontSize: '24px' }} />
            </S.CursorPointer>
            <S.CursorPointer>
              <NearMeOutlinedIcon style={{ fontSize: '31px' }} />
            </S.CursorPointer>
          </S.IconBox>
          <S.CursorPointer>
            <TurnedInNotOutlinedIcon style={{ fontSize: '31px' }} />
            {/* 유저가 북마크 클릭시 */}
            {/* <TurnedInOutlinedIcon style={{ fontSize: '31px' }} /> */}
          </S.CursorPointer>
        </S.IconWrapper>
        <S.Like>좋아요 520개</S.Like>
        <S.CommentBox>
          <UserId>__userid__</UserId>
          <S.Comment>귀여운 강아지</S.Comment>
        </S.CommentBox>
        <S.ShowComment onClick={openModal}>댓글 70개 모두보기</S.ShowComment>
        <S.CommentForm>
          <S.InputComment placeholder="댓글 달기..." onInput={handleResizeHeight} />
          <S.Button>게시</S.Button>
        </S.CommentForm>
      </S.Wrapper>
      <CommentsModal isOpen={isModalOpen} closeModal={closeModal} />
    </>
  );
}
