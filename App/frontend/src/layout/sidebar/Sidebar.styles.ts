import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
  width: 14.6vw;
  background-color: white;
  display: flex;
  flex-direction: column;
  border-right: 1.5px solid #e6e6e6;
`;

export const Title = styled.span`
  font-family: 'Lobster';
  font-size: 2.08vw;
  font-weight: 400;
  margin-left: 1.2vw;
  width: 13.4vw;
  height: 6.5vh;
  display: flex;
  align-items: center;
`;

export const NavBoxWrapper = styled.div`
  height: 88.4vh;
  margin-left: 0.6vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const Spacer = styled.div`
  flex-grow: 1;
`;

export const NavBox = styled.div`
  width: 11.1vw;
  height: 4.7vh;
  border-radius: 10px;
  background-color: #d9d9d9;
  font-size: 1.22vw;
  margin-bottom: 1.45vh;
  display: flex;
  align-items: center;
  padding-left: 7%;
  cursor: pointer;
`;

export const NavBoxText = styled.span`
  margin-left: 4%;
`;
