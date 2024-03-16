import styled from 'styled-components';
import ContentsHeader from './header/ContentsHeader.index';
import ContentsBody from './body/ContentsBody.index';
import ContentsFooter from './footer/ContentsFooter.index';

export default function Contents(): JSX.Element {
  const Wrapper = styled.div`
    width: 468px;
    height: 790px;
    border-bottom: 1.5px solid #d8d8d8;

    margin-top: 3.5%;
  `;

  return (
    <Wrapper>
      <ContentsHeader />
      <ContentsBody />
      <ContentsFooter />
    </Wrapper>
  );
}
