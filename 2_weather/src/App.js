import React, {Component} from 'react';
import './App.css';

import SeasonDisplay from "./components/SeasonDisplay";
import Spinner from "./components/Spinner";

class App extends Component {
  state = {
    latitude: null,
    errorMessage: null
  };

  getGeolocation() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({latitude:position.coords.latitude});
        },
      (err) => {
        this.setState({errorMessage: err.message});
        console.log(err);
      }
    )
  }

  componentDidMount() {
    this.getGeolocation();
  }

  componentDidUpdate() {
    console.log("[component Did Update]");
  }

  renderContent() {
    if (!this.state.latitude && !this.state.errorMessage) {
      return (
        <div className={"App"}>
          <Spinner/>
        </div>
      )
    } else if (this.state.latitude && !this.state.errorMessage) {
      return (
        <div className="App">
          <SeasonDisplay latitude={this.state.latitude}/>
        </div>
      )
    } else {
      return (
        <div className="App">
          <h1>Error: {this.state.errorMessage}</h1>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="border red">
        {this.renderContent()}
      </div>
    );
  }
}


export default App;
