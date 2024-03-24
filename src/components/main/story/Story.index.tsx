import { useCallback, useEffect, useState } from 'react';
import * as S from './Story.styles';
import useEmblaCarousel from 'embla-carousel-react';
import Link from 'next/link';

export default function Story() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
  }, [emblaApi, setScrollSnaps, onSelect]);

  // 샘플 데이터
  const stories = new Array(10).fill(null).map((_, index) => ({
    id: index,
    name: `user ${index + 1}`,
  }));

  return (
    <S.Wrapper ref={emblaRef}>
      <div style={{ display: 'flex', width: '100%' }}>
        <Link href={'/poststory'}>
          <S.StoryBox>
            <S.AddStoryCircle>+</S.AddStoryCircle>
            <S.StoryUser>내 스토리</S.StoryUser>
          </S.StoryBox>
        </Link>
        {stories.map((story, index) => (
          <S.StoryBox key={story.id}>
            <S.StoryCircle></S.StoryCircle>
            <S.StoryUser>{story.name}</S.StoryUser>
          </S.StoryBox>
        ))}
      </div>
    </S.Wrapper>
  );
}
