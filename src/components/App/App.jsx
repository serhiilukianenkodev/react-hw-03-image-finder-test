import { Component } from 'react';
import { Searchbar } from '../Searchbar/Searchbar';
import { AppStyled } from './App.styled';

export class App extends Component {
  state = {
    searchQuery: '',
    page: 1,
  };

  changeQuery = newQuery => {
    this.setState({ searchQuery: newQuery, page: 1 });
  };

  render() {
    return (
      <AppStyled>
        <Searchbar onSubmit={this.changeQuery} />
      </AppStyled>
    );
  }
}
