import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  left: 0;
  height: 100vh;
  width: 17vw;
  background-color: white;
  display: flex;
  flex-direction: column;
  border-right: 1.5px solid #e6e6e6;
`;

export const Title = styled.span`
  font-family: 'Lobster';
  font-size: 25px;
  display: flex;
  align-items: center;
  margin-top: 10%;
  margin-bottom: 15%;
  margin-left: 10%;
`;

export const NavBoxWrapper = styled.div`
  height: 100%;
  padding-top: 1%;
  padding-bottom: 11%;
  margin-left: 3%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const Spacer = styled.div`
  flex-grow: 1;
`;

export const NavBox = styled.div`
  height: 48px;
  border-radius: 10px;
  margin-bottom: 7%;
  display: flex;
  align-items: center;
  padding-left: 7%;
  cursor: pointer;
`;

export const NavBoxText = styled.span`
  margin-left: 8%;
  font-size: 15px;
`;
