import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 700px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 816px) {
    width: 100vw;
  }

  @media only screen and (max-width: 738px) {
    width: 100vw;
  }
`;

export const Header = styled.div`
  width: 100%;
  padding: 0 4%;
  display: flex;
  align-items: center;
  margin-top: 1vh;
  margin-bottom: 1vh;
  font-size: 19px;
  font-weight: 500;
`;

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  padding: 0 2.5%;
  width: 100%;
  height: 87vh;
`;

export const Message = styled.div`
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 20px;
  max-width: 40%;
  font-weight: 500;
  font-size: 14px;
  word-break: break-word;
`;

export const SentMessageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const SentMessage = styled(Message)`
  background-color: #3498db;
  color: white;
`;

export const ReceivedMessageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

export const ReceivedMessage = styled(Message)`
  background-color: #e6e6e6;
`;

export const MessageForm = styled.form`
  display: flex;
  position: fixed;
  bottom: 1vh;
  width: 700px;
  height: 43px;

  @media only screen and (max-width: 816px) {
    width: 95vw;
  }
`;

export const Input = styled.textarea`
  flex-grow: 1;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #d8d8d8;
  padding-left: 2%;
  &:focus {
    border-color: #bdbdbd;
    outline: none;
  }
  ::placeholder {
    color: #bdbdbd;
    font-size: 14px;
  }
  resize: none; /* 사용자가 수동으로 크기를 조절하는 것을 방지 */
  overflow-y: auto; /* 필요할 때만 스크롤바 표시 */
`;

export const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  background-color: #3498db;
  color: white;
  cursor: pointer;
  margin-left: 5px;
`;
