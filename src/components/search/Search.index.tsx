import * as S from './Search.styles';
import { ArrowLeftOutlined, CloseOutlined, SearchOutlined } from '@ant-design/icons';
import { Skeleton } from 'antd';
import { useRouter } from 'next/router';
import { SetStateAction, useState } from 'react';

export default function Search(): JSX.Element {
  const [inputId, setInputId] = useState('');

  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
    setInputId(e.target.value);
  };

  const clearInput = () => {
    setInputId('');
  };

  const SkeletonMap = Array.from({ length: 8 }, (_, index) => index);
  return (
    <S.Wrapper>
      <S.Header>
        <ArrowLeftOutlined onClick={handleBack} style={{ marginRight: '10px', cursor: 'pointer' }} />
        <S.SearchBar>
          <SearchOutlined style={{ marginRight: '8px' }} />
          <S.SearchInput type="text" value={inputId} onChange={handleChange} placeholder="검색" />
          <CloseOutlined onClick={clearInput} style={{ position: 'absolute', right: '20px' }} />
        </S.SearchBar>
      </S.Header>

      {/* 검색중일때 스켈레톤 */}

      {SkeletonMap.map((index) => (
        <Skeleton active avatar paragraph={{ rows: 1 }} style={{ marginTop: '3%' }} key={index} />
      ))}

      {/* 검색 결과가 있을때 */}
      {/* <S.UserBox>
        <S.UserImg></S.UserImg>
        <S.UserInfo>
          <S.UserId>__frinedid__</S.UserId>
          <S.UserName>길동이</S.UserName>
        </S.UserInfo>
      </S.UserBox> */}
      {/* 검색 결과가 있을때 */}
    </S.Wrapper>
  );
}
