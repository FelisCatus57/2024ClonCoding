import styled from 'styled-components';
import ContentsHeader from './header/ContentsHeader.index';
import ContentsBody from './body/ContentsBody.index';
import ContentsFooter from './footer/ContentsFooter.index';

export default function Contents(): JSX.Element {
  const Wrapper = styled.div`
    width: 468px;
    height: auto;
    border-bottom: 1.5px solid #d8d8d8;
    margin-top: 3.5%;
    @media only screen and (max-width: 475px) {
      width: 100vw;
    }
  `;

  return (
    <Wrapper>
      <ContentsHeader />
      <ContentsBody />
      <ContentsFooter />
    </Wrapper>
  );
}
