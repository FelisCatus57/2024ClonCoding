import Main from '../src/components/main/Main.index';
import RecommendFriend from '../src/components/main/recommendfriend/RecommendFriend.index';

export default function Home() {
  return (
    <div style={{ display: 'flex' }}>
      <Main />
      <RecommendFriend />
    </div>
  );
}
