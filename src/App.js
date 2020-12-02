import React from 'react';
import './styles/variables.css';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Layout from './hoc/Layout/layout';
import EmployeeList from './containers/EmployeeList/EmployeeList';
import EmplyeeCreate from './containers/EmployeeCreate/EmployeeCreate';

const App = () => {
  const routes = (
    <Switch>
      <Route path="/" exact component={EmployeeList} />
      <Route path="/create" component={EmplyeeCreate} />
      <Route path="/edit/:id" component={EmplyeeCreate} />
    </Switch>
  );

  return (
    <Layout>
      {routes}
    </Layout>
  );
};

export default App;
