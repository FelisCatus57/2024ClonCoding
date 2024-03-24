import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 101px;
  margin-top: 3%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  padding-left: 0.5%;

  @media only screen and (max-width: 738px) {
    width: 468px;
    margin-top: 60px;
  }
  @media only screen and (max-width: 475px) {
    width: 100vw;
  }
`;

export const StoryBox = styled.div`
  width: 64px;
  height: 84px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 1.45vw;
`;
export const StoryCircle = styled.div`
  width: 58px;
  height: 58px;
  border-radius: 50%;
  border: 1px solid #ff0080;
  cursor: pointer;
`;

export const StoryUser = styled.span`
  font-size: 12px;
`;

export const AddStoryCircle = styled.div`
  width: 58px;
  height: 58px;
  border-radius: 50%;
  border: 1px solid grey;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
`;
