import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export const LoginBox = styled.div`
  width: 350px;
  height: 470px;
  border: 1px solid #d8d8d8;
  display: flex;
  flex-direction: column;

  align-items: center;
`;

export const SignupBox = styled.div`
  width: 350px;
  min-height: 600px;
  height: auto;
  border: 1px solid #d8d8d8;
  display: flex;
  flex-direction: column;

  align-items: center;
`;

export const Title = styled.span`
  font-family: 'Lobster';
  font-size: 40px;
  margin-top: 20%;
  margin-bottom: 20%;
`;

export const Input = styled.input`
  width: 80%;
  border-radius: 5px;
  border: 1px solid #d8d8d8;
  height: 38px;
  padding-left: 3%;
  margin-bottom: 4%;
  &:focus {
    border-color: #bdbdbd;
    outline: none;
  }
  ::placeholder {
    color: #bdbdbd;
    font-size: 14px;
  }
`;

export const LoginButton = styled.button`
  width: 80%;
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

export const SignupDiv = styled.div`
  margin-top: 10%;
  margin-bottom: 5%;
`;

export const SignupText = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Error = styled.span`
  font-size: 13px;
  color: gray;
  margin-bottom: 3%;
`;
