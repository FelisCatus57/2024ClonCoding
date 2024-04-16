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
import { useEffect, useState } from 'react';

import { useRecoilValue } from 'recoil';
import { nickname, profileImageUrl } from '../../../../commons/globalstate/globalstate';
import { useGetLikeUsers } from '../../../../services/like/useGetLikeUsers';
import { useLike } from '../../../../services/like/useLike';
import { useUnLike } from '../../../../services/like/useUnLike';
import { usePostComment } from '../../../../services/comment/usePostComment';
import CommentsModal from './commentsmodal/CommentsModal.index';

export interface PostData {
  commentCount: number;
  postId: string;
  content: string;
  nickname: string;
}
export default function ContentsFooter(props: PostData): JSX.Element {
  const { handleResizeHeight } = useInputResize();
  const myNickname = useRecoilValue(nickname);

  //좋아요
  const { data: likeUsers } = useGetLikeUsers(props.postId);
  const { postLike, isLoading: likeLoading } = useLike();
  const { postUnLike, isLoading: unLikeLoading } = useUnLike();
  const [isLike, setIsLike] = useState(false);
  const [userLikeCount, setUserLikeCount] = useState<number | undefined>(undefined);

  //좋아요 카운트 데이터로 초기화
  useEffect(() => {
    if (likeUsers?.data?.length !== undefined) {
      setUserLikeCount(likeUsers.data.length);
    }
  }, [likeUsers?.data?.length]);

  //좋아요 확인
  useEffect(() => {
    // myNickname이 data 배열 내에 존재하는지 확인합니다.
    const checkLike = likeUsers?.data?.some((user: { nickname: string }) => user.nickname === myNickname);
    setIsLike(checkLike);
  }, [likeUsers, myNickname]);

  // 좋아요 / 좋아요 취소
  const handleLike = async (postId: string) => {
    const originalIsLike = isLike; // 원래 상태 저장
    setIsLike(true); // 옵티미스틱 업데이트 적용
    setUserLikeCount((prevCount) => (prevCount !== undefined ? prevCount + 1 : 1)); // 팔로우 카운트 증가
    try {
      await postLike(postId);
    } catch (err) {
      console.error(err);
      console.log('함수에러');
      setUserLikeCount((prevCount) => (prevCount !== undefined ? prevCount - 1 : 0)); // 팔로우 카운트 감소
      setIsLike(originalIsLike); // 요청 실패 시, 원래 상태로 롤백
    }
  };
  const handleUnLike = async (postId: string) => {
    const originalIsLike = isLike; // 원래 상태 저장
    setIsLike(false); // 옵티미스틱 업데이트 적용
    setUserLikeCount((prevCount) => (prevCount !== undefined ? prevCount - 1 : 1)); // 팔로우 카운트 증가
    try {
      await postUnLike(postId);
    } catch (err) {
      console.error(err);
      setUserLikeCount((prevCount) => (prevCount !== undefined ? prevCount + 1 : 0)); // 팔로우 카운트 감소
      setIsLike(originalIsLike); // 요청 실패 시, 원래 상태로 롤백
    }
  };
  //댓글 모달 on/off
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    document.documentElement.style.overflowY = 'hidden';
    document.body.style.overflowY = 'hidden';
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  //댓글 등록
  const [comment, setComment] = useState('');
  const { postComment, isLoading } = usePostComment();

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!comment.trim()) return; // Prevent empty comments

    try {
      await postComment(props.postId, comment);
      setComment('');
    } catch (err) {
      console.error('Error posting comment:', err);
    }
  };

  return (
    <>
      <S.Wrapper>
        <S.IconWrapper>
          <S.IconBox>
            <S.CursorPointer>
              {isLike ? (
                <HeartTwoTone
                  twoToneColor="#eb2f96"
                  style={{ fontSize: '26px' }}
                  onClick={() => handleUnLike(props.postId)}
                />
              ) : (
                <HeartOutlined style={{ fontSize: '26px' }} onClick={() => handleLike(props.postId)} />
              )}
            </S.CursorPointer>
            <S.CursorPointer style={{ marginLeft: '4%' }}>
              <MessageOutlined onClick={openModal} style={{ fontSize: '24px' }} />
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
        <S.Like>좋아요 {userLikeCount}개</S.Like>
        <S.CommentBox>
          <UserId>{props.nickname}</UserId>
          <S.Comment>{props.content}</S.Comment>
        </S.CommentBox>
        <S.ShowComment onClick={openModal}>댓글 {props.commentCount}개 모두보기</S.ShowComment>
        <S.CommentForm onSubmit={handleSubmit}>
          <S.InputComment
            placeholder="댓글 달기..."
            onInput={handleResizeHeight}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <S.Button type="submit" disabled={isLoading}>
            게시
          </S.Button>
        </S.CommentForm>
      </S.Wrapper>
      <CommentsModal isOpen={isModalOpen} closeModal={closeModal} postId={props.postId} />
    </>
  );
}
