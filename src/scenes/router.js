import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Todo from './Todo/Todo';

export const routes = {
  index: '/',
  new: '/new',
  completed: '/completed',
};

function Router() {
  return (
    <BrowserRouter>
      <Route path={routes.index} component={Todo} />
    </BrowserRouter>
  );
}

export default Router;
