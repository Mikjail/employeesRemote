import React from 'react';
import './styles/variables.css';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Layout from './hoc/Layout/layout';
import reducers from './store/reducers';

const store = createStore(reducers);

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Layout>
        <div className="App">Hello World</div>
      </Layout>
    </BrowserRouter>
  </Provider>
);

export default App;
