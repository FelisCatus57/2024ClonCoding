import { useEffect } from 'react';
import * as S from './MyStoryModal.styles';
import useEmblaCarousel from 'embla-carousel-react';

interface Story {
  id: number;
  name: string;
}

interface StoryModalProps {
  isOpen: boolean;
  closeModal: () => void;
  stories: Story[];
  selectedIndex: number;
}

export default function MyStoryModal(props: StoryModalProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'center', containScroll: 'trimSnaps' });

  useEffect(() => {
    if (props.isOpen && emblaApi) {
      // props로 받은 selectedIndex로 스크롤.
      emblaApi.scrollTo(props.selectedIndex);
    }
  }, [props.isOpen, emblaApi, props.selectedIndex]);

  const handleStoryModalClick = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
  };

  if (!props.isOpen) return null;
  return (
    <S.ModalBackdrop onClick={props.closeModal}>
      <S.CarouselWrapper ref={emblaRef} onClick={handleStoryModalClick}>
        <S.CarouselContainer>
          {props.stories.map((story: Story, index: number) => (
            <S.CarouselSlide key={story.id}>
              <S.Carousel>
                <S.UserInfo>
                  <S.UserImg></S.UserImg>
                  <S.UserId>mystory{story.id + 1}</S.UserId>
                </S.UserInfo>
              </S.Carousel>
            </S.CarouselSlide>
          ))}
        </S.CarouselContainer>
      </S.CarouselWrapper>
      <S.CloseButton>x</S.CloseButton>
    </S.ModalBackdrop>
  );
}
