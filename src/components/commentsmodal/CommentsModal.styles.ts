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
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

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

interface ModalContainerProps {
  $isOpen: boolean;
}
export const ModalContainerWrapper = styled.div<ModalContainerProps>`
  width: 468px;
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
  width: 468px;
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
  height: auto;
  display: flex;
  padding: 0 3%;
  margin-top: 20px;
`;

export const UserImg = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: 1px solid gray;
  margin-right: 1.5%;
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
  max-width: 370px;
  word-wrap: break-word;
  overflow-wrap: break-word;
  @media only screen and (max-width: 475px) {
    max-width: 80vw;
  }
  @media only screen and (max-width: 330px) {
    max-width: 70vw;
  }
`;
