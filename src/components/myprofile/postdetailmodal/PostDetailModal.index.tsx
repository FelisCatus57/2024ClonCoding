import React, { useState } from 'react';
import Image from 'next/image';
import * as S from '../postdetailmodal/PostDetailModal.styles';
import { useRecoilValue } from 'recoil';
import { nickname, profileImageUrl } from '../../../commons/globalstate/globalstate';
import {
  ArrowLeftOutlined,
  BookFilled,
  BookOutlined,
  EditOutlined,
  HeartOutlined,
  HeartTwoTone,
  MessageOutlined,
  SendOutlined,
} from '@ant-design/icons';
import TurnedInNotOutlinedIcon from '@mui/icons-material/TurnedInNotOutlined';
import TurnedInOutlinedIcon from '@mui/icons-material/TurnedInOutlined';
import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined';
import { useInputResize } from '../../../hooks/useInputResize';
import { UserId } from '../../main/contents/header/ContentsHeader.styles';
import PostDetailCommentsModal from './postdetailcommentsmodal/PostDetailCommentsModal.index';

import { InputText } from '../../postboardmodal/PostBoardModal.styles';
import { useDeleteBoard } from '../../../services/board/useDeleteBoard';
import { useEditBoard } from '../../../services/board/useEditBoard';
import { usePostComment } from '../../../services/comment/usePostComment';

interface PostBoardModalProps {
  isOpen: boolean;
  closeModal: () => void;
  postId: string;
  commentCount: number;
  content: string;
  postImage: string;
}

export default function PostDetailModal(props: PostBoardModalProps) {
  if (!props.isOpen) return null;
  const { handleResizeHeight } = useInputResize();
  const handleModalClick = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
  };
  const myNickname = useRecoilValue(nickname);
  const myProfileImage = useRecoilValue(profileImageUrl);

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

  //게시글 삭제
  const { deleteBoard, isLoading: deleteLoading } = useDeleteBoard();
  const handleDeteteBoard = async (postId: string) => {
    try {
      await deleteBoard(postId);
      props.closeModal();
    } catch (err) {
      props.closeModal();
      console.error(err);
    }
  };

  //게시글 수정
  const [editMode, setEditMode] = useState(false);
  const [editableContent, setEditableContent] = useState('');
  const toggleEdit = () => {
    setEditMode(!editMode);
  };
  const { editBoard, isLoading: editLoading } = useEditBoard();

  const handleEditBoard = async (postId: string, content: string) => {
    try {
      await editBoard(postId, content);
      props.closeModal();
    } catch (err) {
      props.closeModal();
      console.error(err);
    }
  };
  return (
    <S.ModalBackdrop onClick={props.closeModal}>
      <S.ModalContainer onClick={handleModalClick}>
        {editMode ? (
          <S.EditHeader>
            <ArrowLeftOutlined onClick={() => setEditMode(false)} style={{ cursor: 'pointer' }} />
            게시글 수정
            <S.SubmitButton onClick={() => handleEditBoard(props.postId, editableContent)}>게시</S.SubmitButton>
          </S.EditHeader>
        ) : (
          <S.Header>
            <S.UserImg>
              <Image src={myProfileImage || '/navicon/user.png'} layout="fill" />
            </S.UserImg>
            <S.UserInfo>
              <S.UserId>{myNickname}</S.UserId>
              {/* <S.UserLoc></S.UserLoc> */}
              <S.Edit onClick={toggleEdit} />
              <S.Delete onClick={() => handleDeteteBoard(props.postId)} disabled={deleteLoading} />
            </S.UserInfo>
          </S.Header>
        )}

        <S.ImageWrapper>
          <Image src={props.postImage || '/navicon/user.png'} layout="fill" />
        </S.ImageWrapper>
        <S.FooterWrapper>
          {editMode ? (
            <S.EditInputText
              onInput={handleResizeHeight}
              value={editableContent}
              placeholder="내용을 작성해주세요"
              onChange={(e) => setEditableContent(e.target.value)}
            />
          ) : (
            <>
              <S.IconWrapper>
                <S.IconBox>
                  <S.CursorPointer>
                    <HeartOutlined style={{ fontSize: '26px' }} />
                    {/* 유저가 하트 클릭시 */}
                    {/* <HeartTwoTone twoToneColor="#eb2f96" style={{ fontSize: '24px' }} /> */}
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
              <S.Like>좋아요 520개</S.Like>
              <S.CommentBox>
                <UserId>{myNickname}</UserId>
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
            </>
          )}
        </S.FooterWrapper>
        <PostDetailCommentsModal isOpen={isModalOpen} closeModal={closeModal} postId={props.postId} />
      </S.ModalContainer>
      <S.CloseButton>x</S.CloseButton>
    </S.ModalBackdrop>
  );
}
