import { ArrowLeftOutlined } from '@ant-design/icons';
import { useRouterBack } from '../../../hooks/useRouterBack';
import * as S from './EditProfile.styles';
import { useRouter } from 'next/router';
import useEditProfile from '../../../services/profile/useEditProfile';
import { ChangeEvent, useState } from 'react';

export default function EditProfile(): JSX.Element {
  const goBack = useRouterBack();
  const router = useRouter();

  const { editProfile, isLoading } = useEditProfile();
  const [website, setWebsite] = useState('' as string);
  const [introduce, setIntruduce] = useState('' as string);
  const handleResizeHeight = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const target = event.target;
    target.style.height = '0'; // 높이 초기화
    target.style.height = `${target.scrollHeight}px`; // 스크롤 높이에 따라 높이 설정
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // 엔터키 기본 이벤트(줄바꿈) 방지
      editProfile(website, introduce);
    }
  };

  return (
    <S.Wrapper>
      <S.Header>
        <ArrowLeftOutlined onClick={goBack} style={{ marginRight: '30px', cursor: 'pointer', marginTop: '4px' }} />
        프로필 편집
      </S.Header>

      <S.Title>소개</S.Title>

      <S.Input
        onInput={handleResizeHeight}
        onKeyPress={handleKeyPress}
        value={introduce}
        onChange={(e) => setIntruduce(e.target.value)}
        placeholder="소개 글을 입력해주세요"
      />
      <S.Title>홈페이지</S.Title>

      <S.Input
        onInput={handleResizeHeight}
        onKeyPress={handleKeyPress}
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
        placeholder="홈페이지를 입력해주세요"
      />
      <S.Button type="submit" onClick={() => editProfile(website, introduce)} disabled={isLoading}>
        등록
      </S.Button>
    </S.Wrapper>
  );
}
