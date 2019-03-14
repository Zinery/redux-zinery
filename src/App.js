import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Layout from './components/Layout/Layout';
import store from './redux/store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Layout />
        </div>
      </Provider>
    );
  }
}

export default App;
