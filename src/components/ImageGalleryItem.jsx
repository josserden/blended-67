import React from 'react';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ largeImageURL, webformatURL, tags }) => {
  return (
    <li className="overflow-hidden rounded-md border bg-gray-400 shadow-md">
      <img
        src={webformatURL}
        alt={tags}
        className="h-full w-full object-cover"
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  largeImageURL: PropTypes.string,
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
