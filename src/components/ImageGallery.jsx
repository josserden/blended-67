import React from 'react';
import PropTypes from 'prop-types';

import { ImageGalleryItem } from './ImageGalleryItem';

export const ImageGallery = ({ images = [] }) => {
  return (
    <ul className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {images.map(({ largeImageURL, webformatURL, tags, id }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          tags={tags}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      largeImageURL: PropTypes.string,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    }).isRequired
  ),
};
