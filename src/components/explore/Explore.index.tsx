import * as S from './Explore.styles';
import { SearchOutlined } from '@ant-design/icons';
export default function Explore(): JSX.Element {
  const test = Array.from({ length: 15 }, (_, index) => index);
  return (
    <S.Wrapper>
      <S.Header>
        <S.SearchBar>
          <SearchOutlined style={{ marginRight: '8px' }} />
          <S.SearchInput placeholder="검색" />
        </S.SearchBar>
      </S.Header>
      <S.PostWrapper>
        {test.map((index) => (
          <S.Post key={index}>
            <S.Img />
          </S.Post>
        ))}
      </S.PostWrapper>
    </S.Wrapper>
  );
}
