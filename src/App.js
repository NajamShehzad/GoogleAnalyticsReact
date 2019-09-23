import React from 'react';
import ReactGA from "react-ga";
import logo from './logo.svg';
import './App.css';
ReactGA.initialize('UA-130800032-1');


class App extends React.Component {

  componentDidMount() {
    ReactGA.pageview(window.location.pathname);
  }

  render() {
//comments

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <button>
            Test Button
          </button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
      </div>
    );
  }
}

export default App;
