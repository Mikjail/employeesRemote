import React from 'react';
import './styles/variables.css';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Layout from './hoc/Layout/layout';
import EmployeeList from './containers/EmployeeList/EmployeeList';
import EmployeeForm from './containers/EmployeeForm/EmployeeForm';

const App = () => {
  const routes = (
    <Switch>
      <Route path="/" exact component={EmployeeList} />
      <Route path="/create" exact component={EmployeeForm} />
    </Switch>
  );

  return (
    <Layout>
      {routes}
    </Layout>
  );
};

export default App;
