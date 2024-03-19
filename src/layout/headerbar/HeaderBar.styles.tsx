import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1.5px solid #e6e6e6;
  z-index: 1000;
  padding: 0 4%;
  background-color: white;
  @media only screen and (min-width: 739px) {
    display: none;
  }
`;

export const Title = styled.span`
  font-family: 'Lobster';
  font-size: 25px;
`;
