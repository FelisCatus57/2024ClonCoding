import { useCallback, useEffect, useState } from 'react';
import * as S from './Story.styles';
import useEmblaCarousel from 'embla-carousel-react';
import Link from 'next/link';
import axios from 'axios';
import PostStoryModal from '../../poststorymodal/PostStoryModal.index';

export default function Story() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setSelectedImage(null); // 모달을 닫을 때 이미지 선택 상태 초기화
    setIsModalOpen(false);
  };

  const handleImageSelect = (image: File | null) => {
    setSelectedImage(image);
  };

  const uploadImage = async () => {
    if (!selectedImage) {
      console.error('파일이 선택되지 않았습니다.');
      return;
    }

    const formData = new FormData();
    formData.append('image', selectedImage);

    try {
      const response = await axios.post('url', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('서버 응답:', response.data);
      // 업로드 성공 후 처리
      closeModal(); // 업로드 성공 후 모달 닫기
    } catch (error) {
      console.error('업로드 에러:', error);
    }
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

  // 샘플 데이터
  const stories = new Array(10).fill(null).map((_, index) => ({
    id: index,
    name: `user ${index + 1}`,
  }));

  return (
    <>
      <S.Wrapper ref={emblaRef}>
        <div style={{ display: 'flex', width: '100%' }}>
          <S.StoryBox onClick={openModal}>
            <S.AddStoryCircle>+</S.AddStoryCircle>
            <S.StoryUser>내 스토리</S.StoryUser>
          </S.StoryBox>

          {stories.map((story, index) => (
            <S.StoryBox key={story.id}>
              <S.StoryCircle></S.StoryCircle>
              <S.StoryUser>{story.name}</S.StoryUser>
            </S.StoryBox>
          ))}
        </div>
      </S.Wrapper>
      <PostStoryModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        onImageSelect={handleImageSelect}
        uploadImage={uploadImage}
        selectedImage={selectedImage}
      />
    </>
  );
}
