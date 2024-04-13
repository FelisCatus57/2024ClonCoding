import * as S from './Search.styles';
import { ArrowLeftOutlined, CloseOutlined, SearchOutlined } from '@ant-design/icons';
import { Skeleton } from 'antd';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useGetSearch } from '../../services/search/useSearch';
import Image from 'next/image';
import Link from 'next/link';

export default function Search(): JSX.Element {
  const [inputId, setInputId] = useState('');
  const router = useRouter();
  const { data: searchData, isLoading } = useGetSearch(inputId); // 검색어에 따른 결과를 받아옴

  const handleBack = () => {
    router.back();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputId(e.target.value);
  };

  console.log(searchData);
  const clearInput = () => {
    setInputId('');
  };
  return (
    <S.Wrapper>
      <S.Header>
        <ArrowLeftOutlined onClick={handleBack} style={{ marginRight: '10px', cursor: 'pointer' }} />
        <S.SearchBar>
          <SearchOutlined style={{ marginRight: '8px' }} />
          <S.SearchInput type="text" value={inputId} onChange={handleChange} placeholder="검색" />
          <CloseOutlined onClick={clearInput} style={{ position: 'absolute', right: '20px', cursor: 'pointer' }} />
        </S.SearchBar>
      </S.Header>

      {/* 검색 중일 때 스켈레톤 로딩 표시 */}
      {isLoading &&
        Array.from({ length: 8 }).map((_, index) => (
          <Skeleton active avatar paragraph={{ rows: 1 }} style={{ marginTop: '3%' }} key={index} />
        ))}

      {/* 검색 결과가 있을 때 결과 렌더링 */}
      {!isLoading &&
        searchData?.data?.length > 0 &&
        searchData.data.map((user: { nickname: string; Id: number; profileImgUrl: string; name: string }) => (
          <Link href={`/user/${user.nickname}`} key={user.Id}>
            <S.UserBox>
              <S.UserImgWrapper>
                <S.UserImg>
                  <Image src={user.profileImgUrl || 'default_image_path'} layout="fill" />
                </S.UserImg>
              </S.UserImgWrapper>
              <S.UserInfo>
                <S.UserId>{user.nickname}</S.UserId>
                <S.UserName>{user.name}</S.UserName>
              </S.UserInfo>
            </S.UserBox>
          </Link>
        ))}
    </S.Wrapper>
  );
}
