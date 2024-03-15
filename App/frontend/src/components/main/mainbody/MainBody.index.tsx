import { Wrapper } from './MainBody.styles';

interface MainBodyProps {
  children: React.ReactNode;
}

const MainBody: React.FC<MainBodyProps> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default MainBody;
