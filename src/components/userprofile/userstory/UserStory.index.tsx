import { SetStateAction, useCallback, useEffect, useState } from 'react';
import * as S from './UserStory.styles';
import useEmblaCarousel from 'embla-carousel-react';
import UserStoryModal from '../userstorymodal/UserStoryModal.index';

export default function UserStory() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [isStoryModalOpen, setIsStoryModalOpen] = useState(false);

  const openStoryModal = (index: SetStateAction<number>) => {
    setSelectedIndex(index); // 여기에서 클릭된 스토리의 인덱스를 상태에 저장.
    setIsStoryModalOpen(true);
  };

  const closeStoryModal = () => {
    setIsStoryModalOpen(false);
  };

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

  const [stories, setStories] = useState(
    new Array(5).fill(null).map((_, index) => ({
      id: index,
      name: `userstory${index + 1}`,
    }))
  );

  return (
    <>
      <S.Wrapper ref={emblaRef}>
        <div style={{ display: 'flex', width: '100%' }}>
          {stories.map((story, index) => (
            <S.StoryBox key={story.id} onClick={() => openStoryModal(index)}>
              <S.StoryCircle></S.StoryCircle>
              <S.StoryUser>{story.name}</S.StoryUser>
            </S.StoryBox>
          ))}
        </div>
      </S.Wrapper>
      <UserStoryModal
        isOpen={isStoryModalOpen}
        closeModal={closeStoryModal}
        stories={stories}
        selectedIndex={selectedIndex}
      />
    </>
  );
}
