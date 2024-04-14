import styled from 'styled-components';
import ContentsHeader from './header/ContentsHeader.index';
import ContentsBody from './body/ContentsBody.index';
import ContentsFooter from './footer/ContentsFooter.index';

export interface PostData {
  commentCount: number;
  postId: string;
  content: string;
  postImage: string;
  nickname: string;
  userProfileImage: string;
}

export default function Contents(props: PostData): JSX.Element {
  const Wrapper = styled.div`
    width: 468px;
    height: auto;
    border-bottom: 1.5px solid #d8d8d8;
    margin-top: 3.5%;
    @media only screen and (max-width: 475px) {
      width: 100vw;
    }
  `;

  console.log(props.postId);
  return (
    <Wrapper>
      <ContentsHeader userProfileImage={props.userProfileImage} nickname={props.nickname} />
      <ContentsBody postImage={props.postImage} />
      <ContentsFooter
        commentCount={props.commentCount}
        postId={props.postId}
        content={props.content}
        nickname={props.nickname}
      />
    </Wrapper>
  );
}
