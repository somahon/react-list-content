import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListContentArea from './components/ListContentArea';

class App extends Component {
  render() {
    return (
        <div className="App">
            <header className="newAppHeader">List of items</header>

            <ListContentArea/>

            <footer className="appFooter"></footer>
        </div>
    );
  }
}

export default App;
