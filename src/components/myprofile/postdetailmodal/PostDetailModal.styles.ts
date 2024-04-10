import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import styled from 'styled-components';

export const StyledInput = styled.input`
  display: none;
`;

export const Header = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  font-size: 15px;
  font-weight: 700;
  padding: 0 3%;
  position: relative;
  /* border-bottom: 1px solid #d8d8d8; */
`;

export const Edit = styled(EditOutlined)`
  position: absolute;
  right: 7.5%;
  font-size: 20px;
  cursor: pointer;
`;

export const Delete = styled(DeleteOutlined)`
  position: absolute;
  right: 10px;
  font-size: 20px;
  cursor: pointer;
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
  font-size: 14px;
  font-weight: 700;
`;

export const UserLoc = styled.span`
  font-size: 12px;
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

export const ModalContainer = styled.div`
  width: 500px;
  min-height: 700px;
  height: auto;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 650px) {
    width: 75vw;
    min-height: 300px;
    max-height: 95vh;
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

export const ImageWrapper = styled.div`
  height: 500px;
  width: 100%;
  overflow: hidden;
  position: relative;
  @media only screen and (max-width: 650px) {
    height: 300px;
  }
`;

////
export const FooterWrapper = styled.div`
  width: 100%;
  padding: 0 3%;
  height: auto;
  display: flex;
  flex-direction: column;
`;
export const IconWrapper = styled.div`
  padding-top: 5px;
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const IconBox = styled.div`
  width: 95px;
  display: flex;
  justify-content: space-between;
`;

export const CursorPointer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const Like = styled.span`
  margin-top: 5px;
  height: 18px;
  font-size: 14px;
  font-weight: 500;
`;

export const CommentBox = styled.div`
  margin-top: 5px;
  display: flex;
`;

export const Comment = styled.span`
  margin-left: 5px;
  font-size: 14px;
  cursor: pointer;
`;

export const ShowComment = styled.span`
  margin-top: 5px;
  font-size: 14px;
  color: #737373;
  cursor: pointer;
`;

export const CommentForm = styled.form`
  display: flex;
  align-items: center;
  margin-top: 9px;
`;

export const InputComment = styled.textarea`
  width: 100%;
  border: none;
  outline: none;
  resize: none;
  overflow-y: hidden;
  font-size: 14px;
`;

export const Button = styled.button`
  width: 50px;
  /* height: 20px; */
  margin-bottom: 20px;
  border: none;
  color: #3498db;
  cursor: pointer;
  font-size: 14px;
  background-color: white;
`;

//게시글 수정

export const EditHeader = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 15px;
  font-weight: 700;
  padding: 0 3%;
  position: relative;
`;
export const SubmitButton = styled.button`
  border: none;
  font-size: 15px;
  font-weight: 700;
  color: #3498db;
  background-color: white;
  cursor: pointer;
  &:disabled {
    color: #a5d8ff;
    cursor: not-allowed;
  }
`;

export const EditInputText = styled.textarea`
  width: 100%;
  border-radius: 10px;
  border: none;
  outline: none;
  resize: none;
  overflow-y: hidden;
  padding-top: 20px;
  font-size: 14px;
  min-height: 166px;
`;
