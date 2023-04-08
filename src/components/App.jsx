import { Component } from 'react';

import { fetchImages } from 'utils/image-api';

import { AppLayout } from 'components/AppLayout';
import { Header } from 'components/Header';
import { ImageGallery } from 'components/ImageGallery';
import { Searchbar } from 'components/Searchbar';
import { Button } from './Button';
import { Title } from './Title';

export class App extends Component {
  state = {
    images: [],
    searchQuery: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchQuery } = this.state;

    if (prevState.searchQuery !== searchQuery) {
      fetchImages(searchQuery).then(images => {
        this.setState({ images });
      });
    }
  }

  handleFormSubmit = query => {
    this.setState({ searchQuery: query });
  };

  render() {
    const { images } = this.state;

    return (
      <>
        <Header />

        <AppLayout>
          <Searchbar onSubmit={this.handleFormSubmit} />

          {images.length > 0 && <ImageGallery images={images} />}

          {/* {images.length === 0 && (
            <Title className="text-center font-light !text-gray-500" tag="h3">
              There are no images ...
            </Title>
          )} */}

          <Button className="mx-auto">Load more</Button>
        </AppLayout>
      </>
    );
  }
}
