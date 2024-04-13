import { ArrowLeftOutlined } from '@ant-design/icons';
import * as S from './Notify.styles';
import { useRouterBack } from '../../hooks/useRouterBack';

export default function Notify(): JSX.Element {
  const goBack = useRouterBack();
  const testMap = Array.from({ length: 8 }, (_, index) => index);

  return (
    <S.Wrapper>
      <S.Header>
        <ArrowLeftOutlined onClick={goBack} style={{ marginRight: '30px', cursor: 'pointer', marginTop: '4px' }} />
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
