import { GlobalStyle } from 'GlobalStyles';
import { SearchBar } from './Searchbar/searchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Component } from 'react';
import { Button } from './Button/button';
import { FetchQuery } from 'API';
import { Loader } from './Loader/Loader';

export class App extends Component {
  state = {
    query: '',
    image: [],
    page: 1,
    isloading: false,
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
      this.setState({ isloading: true });

      const pixabay = await FetchQuery(this.state.query, this.state.page);

      this.setState({ image: pixabay.hits, isloading: false });

      if (pixabay.hits.length === 0) {
        return alert('Sorry image not found...');
      }
    }
  }

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    return (
      <>
        <SearchBar onSubmit={this.changeQuery} />

        {this.state.isloading ? (
          <Loader />
        ) : (
          <ImageGallery image={this.state.image} />
        )}
        {this.state.image.length > 0 && (
          <Button onClick={this.handleLoadMore} />
        )}

        <GlobalStyle />
      </>
    );
  }
}
