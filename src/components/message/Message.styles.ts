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
  margin-bottom: 1vh;
  font-size: 19px;
  font-weight: 500;
`;

export const SearchBar = styled.div`
  width: 100%;
  height: 40px;
  border-radius: 10px;
  background-color: #efefef;
  padding: 0 16px;
  display: flex;
  align-items: center;
  color: gray;
  cursor: pointer;
  position: relative;
  margin-top: 3%;
  margin-bottom: 3%;
`;

export const MessageTitle = styled.span`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 3%;
`;
export const SearchInput = styled.input`
  border: none;
  outline: none;
  background: none;
  padding-bottom: 2.5px;
  font-size: 16px;
  width: 90%;
`;

export const MessageBox = styled.div`
  display: flex;
  width: 100%;
  min-height: 80px;
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

export const UserId = styled.span`
  font-size: 15px;
  font-weight: 600;
`;

export const Message = styled.span`
  font-size: 15px;
  color: #6e6e6e;
  width: 70%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media only screen and (max-width: 600px) {
    width: 50vw;
  }
`;
