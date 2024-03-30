import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  left: 0;
  height: 100vh;
  width: 16vw;
  display: flex;
  flex-direction: column;
  border-right: 1.5px solid #e6e6e6;
  z-index: 1000;
  background-color: white;
  @media only screen and (max-width: 1210px) {
    width: 6.8vw;
  }

  @media only screen and (max-width: 738px) {
    width: 100%;
    height: 49px;
    display: flex;
    border-top: 1.5px solid #e6e6e6;
    position: fixed;
    bottom: 0;
  }
`;

export const Title = styled.span`
  font-family: 'Lobster';
  font-size: 25px;
  display: flex;
  align-items: center;
  margin-top: 10%;
  margin-bottom: 15%;
  margin-left: 10%;
  @media only screen and (max-width: 1210px) {
    display: none;
  }
`;

export const NavBoxWrapper = styled.div`
  height: 100%;
  padding-top: 1%;
  padding-bottom: 11%;
  margin-left: 3%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  @media only screen and (max-width: 1210px) {
    align-items: center;
    margin-left: 0%;
  }

  @media only screen and (max-width: 738px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 10%;
    margin: 0;
  }
`;

export const Spacer = styled.div`
  flex-grow: 1;

  @media only screen and (max-width: 738px) {
    display: none;
  }
`;

export const NavBox = styled.div`
  height: 48px;
  margin-bottom: 7%;
  display: flex;
  align-items: center;
  padding-left: 7%;
  cursor: pointer;
  @media only screen and (max-width: 1210px) {
    padding-left: 0%;
  }
  @media only screen and (max-width: 738px) {
    padding-left: 0%;
    margin-bottom: 0%;
  }
`;

export const NavMessageBox = styled.div`
  height: 48px;
  margin-bottom: 7%;
  display: flex;
  align-items: center;
  padding-left: 5.5%;
  cursor: pointer;
  @media only screen and (max-width: 1210px) {
    padding-left: 0%;
  }
  @media only screen and (max-width: 738px) {
    padding-left: 0%;
    margin-bottom: 0%;
  }
`;

export const NavMessageBoxText = styled.span`
  margin-left: 7%;
  font-size: 15px;
  @media only screen and (max-width: 1210px) {
    display: none;
  }
`;

export const NavBoxText = styled.span`
  margin-left: 8%;
  font-size: 15px;
  @media only screen and (max-width: 1210px) {
    display: none;
  }
`;

export const LogoBox = styled.div`
  display: none;
  @media only screen and (max-width: 1210px) {
    display: flex;
    justify-content: center;
    margin-top: 4vh;
    margin-bottom: 2vh;
  }
  @media only screen and (max-width: 738px) {
    display: none;
  }
`;

export const ResponseImgBox = styled.div`
  height: 48px;
  margin-bottom: 7%;
  display: flex;
  align-items: center;
  padding-left: 7%;
  cursor: pointer;
  @media only screen and (max-width: 1210px) {
    padding-left: 0%;
  }
  @media only screen and (max-width: 738px) {
    display: none;
  }
`;
