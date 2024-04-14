import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 38px;
  display: flex;
  @media only screen and (max-width: 475px) {
    padding: 0 3px;
  }
`;

export const UserImg = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  margin-right: 1.5%;
  position: relative;
  cursor: pointer;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const UserId = styled.span`
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
`;

export const UserLoc = styled.span`
  font-size: 12px;
`;
