import styled from 'styled-components';

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const CloseButton = styled.span`
  position: fixed;
  top: 5px;
  right: 20px;
  border: none;
  cursor: pointer;
  font-size: 27px;
  font-weight: 400;
  color: white;
`;

export const CarouselWrapper = styled.div``;

export const CarouselContainer = styled.div`
  display: flex;
  width: 500px;
  height: 70vh;
  @media only screen and (max-width: 650px) {
    width: 70vw;
    height: 70vh;
  }
`;

export const CarouselSlide = styled.div`
  /* border-radius: 10px; */
  /* position: relative; */
  flex: 0 0 100%;
  margin-right: 10%;
  @media only screen and (max-width: 650px) {
    margin-right: 7%;
  }
`;

export const Carousel = styled.div`
  width: 500px;
  height: 70vh;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  background-color: lightgray;
  @media only screen and (max-width: 650px) {
    width: 70vw;
    height: 70vh;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5%;
  margin-left: 3%;
`;
export const UserImg = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 3px solid white;
  margin-right: 2.5%;
`;

export const UserId = styled.span`
  font-size: 15px;
  font-weight: 600;
  color: white;
`;
