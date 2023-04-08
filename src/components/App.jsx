import { Component } from 'react';

import { fetchImages } from 'utils/image-api';

import { AppLayout } from 'components/AppLayout';
import { Header } from 'components/Header';
import { ImageGallery } from 'components/ImageGallery';
import { Searchbar } from 'components/Searchbar';
import { Button } from './Button';
import { Title } from './Title';

const INITIAL_STATE = {
  images: [],
  searchQuery: '',
  page: 1,
  isVisible: false,
  per_page: 12,
};

export class App extends Component {
  state = {
    ...INITIAL_STATE,
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchQuery, page, per_page } = this.state;

    if (prevState.searchQuery !== searchQuery || prevState.page !== page) {
      fetchImages(searchQuery, page).then(({ hits, totalHits }) => {
        this.setState(prevState => ({
          images: [...prevState.images, ...hits],
          isVisible: totalHits > prevState.images.length + per_page,
        }));
      });
    }
  }

  handleFormSubmit = query => {
    this.setState({
      ...INITIAL_STATE,
      searchQuery: query,
    });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { images, isVisible } = this.state;

    return (
      <>
        <Header />

        <AppLayout>
          <Searchbar onSubmit={this.handleFormSubmit} />

          {images.length > 0 && <ImageGallery images={images} />}

          {isVisible ? (
            <Button className="mx-auto " onClick={this.handleLoadMore}>
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
  }
}
