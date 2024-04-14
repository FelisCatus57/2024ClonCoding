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
`;

export const PostWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const Post = styled.div`
  width: 33.333%;
  padding-top: 33.333%;
  position: relative;
  cursor: pointer;
`;

export const Img = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #f2f2f2;
  border: 1px solid #ffffff;
`;
