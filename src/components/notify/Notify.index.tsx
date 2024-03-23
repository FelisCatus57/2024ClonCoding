import { ArrowLeftOutlined } from '@ant-design/icons';
import * as S from '../notify/Notify.styles';
import { useRouter } from 'next/router';

export default function Notify(): JSX.Element {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };

  const testMap = Array.from({ length: 8 }, (_, index) => index);

  return (
    <S.Wrapper>
      <S.Header>
        <ArrowLeftOutlined onClick={handleBack} style={{ marginRight: '30px', cursor: 'pointer', marginTop: '4px' }} />
        알림
      </S.Header>

      {testMap.map((index) => (
        <S.UserBox key={index}>
          <S.UserImg></S.UserImg>
          <S.NotifyMessage>
            새 댓글이 등록되었어요
            <br />
            test 새 댓글이 등록되었어요
            <br />
          </S.NotifyMessage>
        </S.UserBox>
      ))}
    </S.Wrapper>
  );
}
