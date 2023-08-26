import { GlobalStyle } from 'GlobalStyles';
import { SearchBar } from './Searchbar/searchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Component } from 'react';
import { Button } from './Button/button';
import { FetchQuery } from 'API';

export class App extends Component {
  state = {
    query: '',
    image: [],
    page: 1,
    isloading: false,
    error: null,
  };

  changeQuery = newQuery => {
    this.setState({
      query: newQuery,
      image: [],
      page: 1,
    });
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      const pixabay = await FetchQuery(this.state.query, this.state.page);
      this.setState({ image: pixabay.hits });
    }
  }

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    return (
      <>
        <SearchBar onSubmit={this.changeQuery} />
        <ImageGallery image={this.state.image} />
        <Button onClick={this.handleLoadMore} />
        <GlobalStyle />
      </>
    );
  }
}
