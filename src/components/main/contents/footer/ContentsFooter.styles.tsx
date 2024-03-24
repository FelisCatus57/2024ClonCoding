import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 144px;
  height: auto;
  display: flex;
  flex-direction: column;
  margin-bottom: 2%;
  @media only screen and (max-width: 475px) {
    padding: 0 3px;
  }
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

export const Button = styled.div`
  width: 70px;
  height: 50px;
  border: none;
  /* background-color: red; */
  color: #3498db;
  cursor: pointer;
  font-size: 14px;
`;
