import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 4%;
  @media only screen and (max-width: 765px) {
    width: 90vw;
  }

  @media only screen and (max-width: 738px) {
    width: 100vw;
  }
`;

export const InputText = styled.textarea`
  width: 100%;
  padding: 8px;
  margin-top: 10px;
  border: none;
  outline: none;
  resize: none;
  overflow-y: hidden;
  font-size: 14px;
`;
