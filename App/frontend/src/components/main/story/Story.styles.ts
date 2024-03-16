import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 101px;
  margin-top: 3%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: 1.5px solid #e6e6e6;
  border-radius: 6px;
  overflow: hidden;
  padding-left: 0.5%;
  position: relative;
`;

export const StoryBox = styled.div`
  width: 64px;
  height: 84px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 1vw;
`;
export const StoryCircle = styled.div`
  width: 66px;
  height: 66px;
  border-radius: 50%;
  border: 1px solid #ff0080;
  cursor: pointer;
`;

export const StoryUser = styled.span`
  font-size: 12px;
`;
