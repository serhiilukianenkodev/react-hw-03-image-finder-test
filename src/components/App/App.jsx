import { Component } from 'react';
import { Searchbar } from '../Searchbar/Searchbar';
import { AppStyled } from './App.styled';

import { ImageGallery } from 'components/ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    searchQuery: '',
    page: 1,
    status: 'idle',
  };

  setStatus = newStatus => {
    this.setState({ status: newStatus });
  };

  changeQuery = newQuery => {
    this.setState({ searchQuery: newQuery, page: 1 });
  };

  render() {
    const { searchQuery, page } = this.state;
    return (
      <AppStyled>
        <Searchbar onSubmit={this.changeQuery} />
        <ImageGallery
          query={searchQuery}
          page={page}
          setStatus={this.setStatus}
        />
      </AppStyled>
    );
  }
}
