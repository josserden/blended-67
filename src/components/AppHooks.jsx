import { useState, useEffect } from 'react';

import { fetchImages } from 'utils/image-api';

import { AppLayout } from 'components/AppLayout';
import { Header } from 'components/Header';
import { ImageGallery } from 'components/ImageGallery';
import { SearchbarHook } from 'components/Searchbar/SearchbarHook';
import { Button } from './Button';
import { Title } from './Title';

const PER_PAGE = 12;
const START_PAGE = 1;

export const AppHooks = () => {
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(START_PAGE);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (searchQuery === '') return;

    const getImages = async () => {
      try {
        const { hits, totalHits } = await fetchImages(searchQuery, page);
        setImages(prevImages => [...prevImages, ...hits]);
        setIsVisible(page < Math.ceil(totalHits / PER_PAGE));
      } catch (error) {
        console.error(error);
      }
    };

    getImages();
  }, [searchQuery, page]);

  const handleFormSubmit = query => {
    setSearchQuery(query);
    setPage(START_PAGE);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <>
      <Header />

      <AppLayout>
        <SearchbarHook onSubmit={handleFormSubmit} />

        {images.length > 0 && <ImageGallery images={images} />}

        {isVisible ? (
          <Button className="mx-auto " onClick={handleLoadMore}>
            Load more
          </Button>
        ) : (
          <Title className="text-center font-light !text-gray-500" tag="h3">
            There are no images ...
          </Title>
        )}
      </AppLayout>
    </>
  );
};
