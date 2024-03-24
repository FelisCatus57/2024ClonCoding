import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 700px;
  height: 70vh;
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
  margin-top: 1vh;
  margin-bottom: 5vh;
  font-size: 19px;
  font-weight: 500;
  position: relative;
`;

export const PreviewContainer = styled.div`
  width: 100%;
  /* height: 500px; */
  height: 70vh;
  position: relative;
`;

export const StyledInput = styled.input`
  margin: 50px 0;
  display: none;
`;

export const UploadButton = styled.button`
  border: none;
  position: absolute;
  right: 0;
  font-size: 19px;
  font-weight: 500;
  /* background-color: #3498db; */
  color: white;
  color: #3498db;
  background-color: white;
  /* border-radius: 5px; */
  /* margin-top: 50px; */
  cursor: pointer;
  &:disabled {
    /* background-color: #a5d8ff; */
    color: #a5d8ff;

    cursor: not-allowed;
  }
`;

export const FileInputLabel = styled.label`
  width: 100%;
  /* height: 500px; */
  height: 70vh;

  border-radius: 10px;
  border: 1px dashed #3498db;
  color: #3498db;
  font-size: 20px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: white;
  transition: all 0.3s;

  &:hover {
    background-color: #3498db;
    color: white;
    border-color: #3498db;
  }
`;
