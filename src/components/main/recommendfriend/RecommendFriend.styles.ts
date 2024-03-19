import styled from 'styled-components';

export const Wrapper = styled.div`
  min-width: 300px;
  margin-top: 3.5%;
  margin-left: 7%;
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 100%;
  @media only screen and (max-width: 1090px) {
    display: none;
  }
`;
export const UserBox = styled.div`
  height: 38px;
  display: flex;
  margin-top: 5%;
`;

export const UserImg = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: 1px solid grey;
  margin-right: 1.5%;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1%;
`;
export const UserId = styled.span`
  font-size: 13px;
  font-weight: 700;
`;

export const UserName = styled.span`
  font-size: 12px;
  color: #6e6e6e;
`;

export const RecommendText = styled.span`
  margin-top: 6%;
  color: #6e6e6e;
  font-size: 14px;
`;
