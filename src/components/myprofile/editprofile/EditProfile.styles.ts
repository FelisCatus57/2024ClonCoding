import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 700px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 0 4%;

  @media only screen and (max-width: 765px) {
    width: 90vw;
  }

  @media only screen and (max-width: 738px) {
    width: 100vw;
  }
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 1vh;
  font-size: 19px;
  font-weight: 500;
  margin-bottom: 10vh;
`;

export const Title = styled.span`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 1%;
  margin-left: 1%;
`;

export const Input = styled.textarea`
  width: 100%;
  border: none;
  outline: none;
  resize: none;
  overflow-y: hidden;
  border-bottom: 1px solid darkgray;
  height: 23px;
  margin-bottom: 3%;
`;

export const Button = styled.button`
  width: 100%;
  border-radius: 10px;
  border: none;
  background-color: #58acfa;
  height: 32px;
  margin-top: 2%;
  color: white;
  font-size: 13px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
