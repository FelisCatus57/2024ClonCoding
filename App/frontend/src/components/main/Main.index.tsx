import Contents from './contents/Contents.index';
import MainBody from './mainbody/MainBody.index';
import Story from './story/Story.index';

export default function Main(): JSX.Element {
  return (
    <>
      <MainBody>
        <Story />
        <Contents />
      </MainBody>
    </>
  );
}
