import React, {Component} from 'react';

import unsplash from './api/unsplash';

import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";

class App extends Component {
  state = {
    images: [],
  };

/*  onSearchSubmit = async term => {
    const response = await axios.get(
      'https://api.unsplash.com/search/photos',
      {
        headers: {
          Authorization: 'Client-ID 57675f0dad6be4b322de84d0291026f742858e7eac8da4909d653ae2d5dd9aee'
        },
        params: {
          query: term,
        },
    });

    console.log(response.data.results);
  }*/

  // NOTE: to handle 'this' problem, 1) .bind(this), 2) define as arrow function, 3) bind in the constructor
  onSearchSubmit(term) {
    unsplash.get(
      '/search/photos',
      {
        params: {
          query: term,
        },
    }).then((response) => {
      this.setState({images: response.data.results});
    })
  }

  render() {
    return (
      <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit.bind(this)} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
