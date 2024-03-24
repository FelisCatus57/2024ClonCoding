import { ChangeEvent } from 'react';

type UseInputHeight = () => {
  handleResizeHeight: (event: ChangeEvent<HTMLTextAreaElement>) => void;
};

export const useInputResize: UseInputHeight = () => {
  const handleResizeHeight = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const target = event.target;
    target.style.height = 'inherit'; // 높이 초기화
    target.style.height = `${target.scrollHeight}px`; // 스크롤 높이에 따라 높이 설정
  };

  return { handleResizeHeight };
};
