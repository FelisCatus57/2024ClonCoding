import styled from 'styled-components';

export const StyledInput = styled.input`
  display: none;
`;

export const Header = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 15px;
  font-weight: 700;
  padding: 0 3%;
  border-bottom: 1px solid #d8d8d8;
`;

export const UploadButton = styled.button`
  border: none;
  font-size: 15px;
  font-weight: 700;
  color: #3498db;
  background-color: white;
  cursor: pointer;
  &:disabled {
    color: #a5d8ff;
    cursor: not-allowed;
  }
`;

export const PreviewContainer = styled.div`
  width: 100%;
  height: 520px;
  position: relative;
  @media only screen and (max-width: 650px) {
    height: 470px;
  }
`;

export const FileInputLabel = styled.label`
  width: 100%;
  height: 520px;
  color: #585858;
  font-size: 20px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background-color: #bdbdbd;
    color: white;
  }
  @media only screen and (max-width: 650px) {
    height: 470px;
  }
`;

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

export const ModalContainer = styled.div`
  width: 500px;
  height: 570px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  @media only screen and (max-width: 650px) {
    width: 75vw;
    height: 520px;
  }
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
