import React, { useEffect, useState } from 'react';
import * as S from '../postdetailcommentsmodal/PostDetailCommentsModal.styles';

import Image from 'next/image';
import { useGetComments } from '../../../../services/comment/useGetComments';
import { useDeleteComment } from '../../../../services/comment/useDeleteComment';
import { useRecoilValue } from 'recoil';
import { nickname } from '../../../../commons/globalstate/globalstate';
import { usePostReply } from '../../../../services/comment/usePostReply';
import { useInputResize } from '../../../../hooks/useInputResize';
interface CommentsModalProps {
  isOpen: boolean;
  closeModal: () => void;
  postId: string;
}

interface Comment {
  commentChildrenResponses: Comment[];
  commentId: string;
  userFeedResponse: {
    userProfileUrl: string;
    nickname: string;
  };
  userProfileUrl: string;
  nickname: string;
  content: string;
}
export default function PostDetailCommentsModal(props: CommentsModalProps) {
  const handleModalClick = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
  };
  const { handleResizeHeight } = useInputResize();
  const [shouldRender, setShouldRender] = useState<boolean>(props.isOpen);
  const myNickname = useRecoilValue(nickname);
  useEffect(() => {
    if (props.isOpen) {
      setShouldRender(true);
    } else {
      setTimeout(() => {
        setShouldRender(false);
        document.documentElement.style.overflowY = '';
        document.body.style.overflowY = '';
      }, 400);
    }
  }, [props.isOpen]);

  const { data } = useGetComments(props.postId);
  const { deleteComment } = useDeleteComment();
  //댓글 삭제
  const handleDeteteComment = async (postId: string, commentId: string) => {
    try {
      await deleteComment(postId, commentId);
      // props.closeModal();
    } catch (err) {
      // props.closeModal();
      console.error(err);
    }
  };

  //대댓글 input
  const [openReplyInputId, setOpenReplyInputId] = useState<string | null>(null);
  const toggleReplyInput = (commentId: string) => {
    if (openReplyInputId === commentId) {
      // 이미 열린 입력창을 닫습니다.
      setOpenReplyInputId(null);
    } else {
      // 새 입력창을 엽니다.
      setOpenReplyInputId(commentId);
    }
  };
  //대댓글 보기

  const [visibleRepliesId, setVisibleRepliesId] = useState<string | null>(null);

  const toggleVisibleReplies = (commentId: string) => {
    if (visibleRepliesId === commentId) {
      // 이미 보여지고 있는 대댓글을 숨깁니다.
      setVisibleRepliesId(null);
    } else {
      // 선택한 댓글의 대댓글을 보여줍니다.
      setVisibleRepliesId(commentId);
    }
  };

  //대댓글 post
  const [replyComment, setReplyComment] = useState('');
  const { postReply } = usePostReply();
  const handleReplySubmit = async (e: { preventDefault: () => void }, commentId: string) => {
    e.preventDefault();

    try {
      await postReply(props.postId, commentId, replyComment);
      setReplyComment('');
      setOpenReplyInputId(null);
    } catch (err) {
      console.error('Error posting comment:', err);
    }
  };

  if (!shouldRender) return null;
  return (
    <S.ModalBackdrop onClick={props.closeModal}>
      <S.ModalContainerWrapper $isOpen={props.isOpen} onClick={handleModalClick}>
        <S.Header>댓글</S.Header>
        <S.ModalContainer>
          {data?.data.map((comment: Comment) => (
            <>
              <S.CommentWrapper key={comment.commentId}>
                <S.UserImg>
                  <Image src={comment.userFeedResponse.userProfileUrl} layout="fill" />
                </S.UserImg>
                <S.UserInfo>
                  <S.UserId>{comment.userFeedResponse.nickname}</S.UserId>
                  <S.UserComment>{comment.content}</S.UserComment>
                  <S.ReplyWrapeer>
                    <S.Reply style={{ marginRight: '10px' }} onClick={() => toggleVisibleReplies(comment.commentId)}>
                      답글 보기 {comment.commentChildrenResponses?.length || 0}개
                    </S.Reply>
                    <S.Reply onClick={() => toggleReplyInput(comment.commentId)}>답글 달기</S.Reply>
                  </S.ReplyWrapeer>
                  {openReplyInputId === comment.commentId && (
                    <>
                      <S.InputReply
                        onInput={handleResizeHeight}
                        placeholder="답글 달기..."
                        value={replyComment}
                        onChange={(e) => setReplyComment(e.target.value)}
                      />
                      <S.ReplySubmit onClick={(e) => handleReplySubmit(e, comment.commentId)}>게시</S.ReplySubmit>
                    </>
                  )}
                </S.UserInfo>
                {myNickname === comment.userFeedResponse.nickname && (
                  <S.DeleteComment onClick={() => handleDeteteComment(props.postId, comment.commentId)} />
                )}
              </S.CommentWrapper>
              {visibleRepliesId === comment.commentId &&
                comment.commentChildrenResponses?.map((reply) => (
                  <S.ReplyCommentWrapper key={reply.commentId}>
                    <S.UserImg>
                      <Image src={reply.userFeedResponse.userProfileUrl} layout="fill" />
                    </S.UserImg>
                    <S.UserInfo>
                      <S.UserId>{reply.userFeedResponse.nickname}</S.UserId>
                      <S.UserComment>{reply.content}</S.UserComment>
                    </S.UserInfo>
                    {reply.userFeedResponse.nickname === myNickname && (
                      <S.DeleteComment onClick={() => handleDeteteComment(props.postId, reply.commentId)} />
                    )}
                  </S.ReplyCommentWrapper>
                ))}
            </>
          ))}
        </S.ModalContainer>
      </S.ModalContainerWrapper>

      <S.CloseButton>x</S.CloseButton>
    </S.ModalBackdrop>
  );
}
