import { ArrowLeftOutlined, CloseOutlined, SearchOutlined } from '@ant-design/icons';
import * as S from '../message/Message.styles';
import { useRouter } from 'next/router';
import { SetStateAction, useState } from 'react';
import Link from 'next/link';

export default function Message(): JSX.Element {
  const [inputId, setInputId] = useState('');
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };

  const testMap = Array.from({ length: 8 }, (_, index) => index);

  const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
    setInputId(e.target.value);
  };

  const clearInput = () => {
    setInputId('');
  };
  return (
    <S.Wrapper>
      <S.Header>
        <ArrowLeftOutlined onClick={handleBack} style={{ marginRight: '30px', cursor: 'pointer', marginTop: '4px' }} />
        __userid__
      </S.Header>
      <S.SearchBar>
        <SearchOutlined style={{ marginRight: '8px' }} />
        <S.SearchInput type="text" value={inputId} onChange={handleChange} placeholder="검색" />
        <CloseOutlined onClick={clearInput} style={{ position: 'absolute', right: '20px' }} />
      </S.SearchBar>
      <S.MessageTitle>메시지</S.MessageTitle>
      {testMap.map((index) => (
        <Link href={`/message/${index}`}>
          <S.MessageBox key={index}>
            <S.UserImg></S.UserImg>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <S.UserId>user</S.UserId>
              <S.Message>안녕하세요 테스트 메시지입니다.테스트 메시지입니다.테스트 메시지입니다.</S.Message>
            </div>
          </S.MessageBox>
        </Link>
      ))}
    </S.Wrapper>
  );
}
