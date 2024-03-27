import Link from 'next/link';
import * as S from './HeaderBar.styles';
import { HeartOutlined } from '@ant-design/icons';

export default function Headerbar(): JSX.Element {
  return (
    <S.Wrapper>
      <S.Title>Chosungram</S.Title>

      <Link href={'/notify'}>
        <HeartOutlined style={{ fontSize: '24px' }} />
      </Link>
    </S.Wrapper>
  );
}
