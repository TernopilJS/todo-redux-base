import React from 'react';
import T from 'prop-types';
import { routes } from '../router';
// import s from './Todo.module.scss';

function ListScene({ match }) {
  return <div>path: {match.path}</div>;
}

ListScene.propTypes = {};

export default ListScene;
