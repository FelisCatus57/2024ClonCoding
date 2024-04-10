import { DeleteOutlined } from '@ant-design/icons';
import styled, { keyframes } from 'styled-components';

export const StyledInput = styled.input`
  display: none;
`;

export const Header = styled.div`
  width: 100%;
  min-height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  font-weight: 700;
  padding: 0 3%;
  border-bottom: 1px solid #e6e6e6;
`;
export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1010;
`;

interface ModalContainerProps {
  $isOpen: boolean;
}

const slideUp = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;

// 모달 사라짐 애니메이션 정의
const slideDown = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(100%);
  }
`;

export const ModalContainerWrapper = styled.div<ModalContainerProps>`
  width: 500px;
  height: 70vh;
  position: fixed;
  bottom: 0;
  background-color: white;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  animation: ${({ $isOpen }) => ($isOpen ? slideUp : slideDown)} 0.4s forwards;
  @media only screen and (max-width: 475px) {
    width: 100vw;
    margin-left: 0;
  }
`;

export const ModalContainer = styled.div`
  width: 500px;
  max-width: 500px;
  height: 64.6vh;
  margin-top: 50px;
  position: fixed;
  bottom: 0;
  background-color: white;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  @media only screen and (max-width: 475px) {
    width: 100vw;
    margin-left: 0;
    height: 64vh;
  }
  @media only screen and (max-width: 400px) {
    height: 62.5vh;
  }
`;
export const CloseButton = styled.span`
  position: fixed;
  top: 5px;
  right: 20px;
  border: none;
  cursor: pointer;
  font-size: 27px;
  font-weight: 400;
  color: white;
`;

export const CommentWrapper = styled.div`
  display: flex;
  padding: 0 3%;
  margin-top: 20px;
  height: auto;
  position: relative;
`;

export const UserImg = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  margin-right: 1.5%;
  position: relative;
`;
export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
export const UserId = styled.span`
  font-size: 13px;
`;

export const UserComment = styled.span`
  font-size: 13px;
  font-weight: 700;
  max-width: 400px;
  word-wrap: break-word;
  overflow-wrap: break-word;
  @media only screen and (max-width: 475px) {
    max-width: 75vw;
  }
  @media only screen and (max-width: 330px) {
    max-width: 65vw;
  }
`;

export const DeleteComment = styled(DeleteOutlined)`
  position: absolute;
  margin-top: 3px;
  right: 5%;
  cursor: pointer;
`;

//대댓글

export const ReplyWrapeer = styled.div`
  display: flex;
`;
export const Reply = styled.span`
  font-size: 13px;
  font-weight: 500;
  color: gray;
  cursor: pointer;
`;

export const InputReply = styled.textarea`
  margin-top: 5px;
  width: 380px;
  height: 50px;
  border: none;
  outline: none;
  resize: none;
  overflow-y: auto;
  font-size: 13px;
  position: relative;
  @media only screen and (max-width: 475px) {
    max-width: 73vw;
  }
  @media only screen and (max-width: 440px) {
    max-width: 70vw;
  }
  @media only screen and (max-width: 390px) {
    max-width: 67vw;
  }
`;

export const ReplySubmit = styled.button`
  width: 40px;
  height: 30px;
  position: absolute;
  bottom: 23px;
  right: 20px;
  border: none;
  color: #3498db;
  cursor: pointer;
  font-size: 14px;
  background-color: white;
`;
export const ReplyCommentWrapper = styled.div`
  height: 38px;
  display: flex;
  padding: 0 3%;
  margin-top: 20px;
  margin-left: 20px;
  position: relative;
`;
