import { useCallback, useEffect, useState } from 'react';
import * as S from './UserStory.styles';
import useEmblaCarousel from 'embla-carousel-react';

export default function UserStory() {
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
  const stories = new Array(6).fill(null).map((_, index) => ({
    id: index,
    name: `userstory${index + 1}`,
  }));

  return (
    <S.Wrapper ref={emblaRef}>
      <div style={{ display: 'flex', width: '100%' }}>
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
