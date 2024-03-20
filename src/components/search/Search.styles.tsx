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
  justify-content: center;
  margin-top: 1vh;
  margin-bottom: 1vh;
`;

export const SearchBar = styled.div`
  width: 95%;
  height: 40px;
  border-radius: 10px;
  background-color: #efefef;
  padding: 0 16px;
  display: flex;
  align-items: center;
  color: gray;
  cursor: pointer;
  position: relative;
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
  background: none;
  padding-bottom: 2.5px;
  font-size: 16px;
  width: 90%;
`;

export const UserBox = styled.div`
  height: 50px;
  display: flex;
  margin-top: 5%;
  width: 100%;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1%;
`;

export const UserImg = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid grey;
  margin-right: 1.5%;
`;

export const UserId = styled.span`
  font-size: 13px;
  font-weight: 700;
`;

export const UserName = styled.span`
  font-size: 12px;
  color: #6e6e6e;
`;
