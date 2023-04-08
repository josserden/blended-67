import { Component } from 'react';

import { fetchImages } from 'utils/image-api';

import { AppLayout } from 'components/AppLayout';
import { Header } from 'components/Header';
import { Searchbar } from 'components/Searchbar';

export class App extends Component {
  state = {
    images: [],
    searchQuery: '',
  };

  // componentDidMount() {
  //   fetchImages('batman').then(data => {
  //     console.log(data);
  //   });
  // }

  handleFormSubmit = query => {
    fetchImages(query).then(data => {
      console.log(data);
    });
  };

  render() {
    return (
      <>
        <Header />

        <AppLayout>
          <Searchbar onSubmit={this.handleFormSubmit} />
        </AppLayout>
      </>
    );
  }
}
