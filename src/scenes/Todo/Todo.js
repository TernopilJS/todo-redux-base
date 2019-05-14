import React from 'react';
import T from 'prop-types';
import { Link, Switch, Route } from 'react-router-dom';
import { routes } from '../router';
import List from '../List/List';
// import s from './Todo.module.scss';

// add routes
// / - all
// /new - only not completed
// /completed - only completed

function TodoScene({ match }) {
  return (
    <div>
      <header>Header here</header>

      <Switch>
        <Route path={routes.index} component={List} exact />
        <Route path={routes.new} component={List} />
        <Route path={routes.completed} component={List} />
      </Switch>

      <footer>
        <Link to={routes.index}>All</Link>
        <Link to={routes.new}>New</Link>
        <Link to={routes.completed}>Completed</Link>
      </footer>
    </div>
  );
}

TodoScene.propTypes = {};

export default TodoScene;
