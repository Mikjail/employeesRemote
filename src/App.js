import React from 'react';
import './styles/variables.css';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Layout from './hoc/Layout/layout';
import reducers from './store/reducers';
import EmployeeList from './containers/EmployeeList/EmployeeList';

const store = createStore(reducers);

const App = () => {
  const routes = (
    <Switch>
      <Route path="/" exact component={EmployeeList} />
    </Switch>
  );

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          {routes}
        </Layout>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
