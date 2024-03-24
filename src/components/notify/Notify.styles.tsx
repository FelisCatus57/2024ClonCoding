import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 700px;
  height: 100vh;
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

export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 1vh;
  margin-bottom: 1vh;
  font-size: 19px;
  font-weight: 500;
`;

export const UserBox = styled.div`
  min-height: 80px;
  display: flex;
  height: auto;
  width: 100%;
  align-items: center;

  cursor: pointer;
  &:hover {
    background-color: #fafafa;
  }
`;

export const UserImg = styled.div`
  min-width: 50px;
  min-height: 50px;
  border-radius: 50%;
  border: 1px solid grey;
  margin-right: 1.5%;
`;

export const NotifyMessage = styled.span`
  font-size: 14px;
`;
