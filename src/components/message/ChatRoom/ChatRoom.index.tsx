import { useEffect, useRef, useState } from 'react';
import * as S from './ChatRoom.styles';
import io, { Socket } from 'socket.io-client';
import Image from 'next/image';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';
import { useRouterBack } from '../../../hooks/useRouterBack';

export default function ChatRoom(): JSX.Element {
  const goBack = useRouterBack();

  // 테스트용 데이터
  const initialMessages = [
    { id: 1, text: '안녕 테스트하고있어 ', sender: 'user1' },
    { id: 2, text: '테스트야', sender: 'user2' },
    { id: 3, text: '테스트하고 있어요', sender: 'user2' },
    { id: 4, text: '안녕하세요, ', sender: 'user1' },
  ];

  const [messages, setMessages] = useState(initialMessages);
  const [inputMessage, setInputMessage] = useState('');

  const socketRef = useRef<Socket | null>(null);
  const currentUser = { id: 'user1' }; // 현재 사용자 ID

  useEffect(() => {
    socketRef.current = io('http://url');
    socketRef.current.on('message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socketRef.current?.disconnect();
    };
  }, []);

  const sendMessage = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (inputMessage.trim()) {
      const message = {
        id: Date.now(),
        text: inputMessage,
        sender: currentUser.id,
      };
      socketRef.current?.emit('message', message);
      setInputMessage('');
    }
  };

  return (
    <S.Wrapper>
      <S.Header>
        <ArrowLeftOutlined onClick={goBack} style={{ marginRight: '30px', cursor: 'pointer', marginTop: '4px' }} />
        ChatUserId
      </S.Header>
      <S.ChatContainer>
        {messages.map((message) => (
          <div key={message.id}>
            {message.sender === currentUser.id ? (
              <S.SentMessageWrapper>
                <S.SentMessage>{message.text}</S.SentMessage>
              </S.SentMessageWrapper>
            ) : (
              <S.ReceivedMessageWrapper>
                <S.ReceivedMessage>{message.text}</S.ReceivedMessage>
              </S.ReceivedMessageWrapper>
            )}
          </div>
        ))}
      </S.ChatContainer>
      <S.MessageForm onSubmit={sendMessage}>
        <S.Input value={inputMessage} onChange={(e) => setInputMessage(e.target.value)} />
        <S.Button type="submit">보내기</S.Button>
      </S.MessageForm>
    </S.Wrapper>
  );
}
