import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import Store from './pages/Store';
import Error404 from '../src/components/Error';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/grass" exact component={Store} />
      <Route path="/psychic" exact component={Store} />
      <Route path="/water" exact component={Store} />
      <Route path="/fire" exact component={Store} />
      <Route path="/rock" exact component={Store} />
      <Route path="/ghost" exact component={Store} />
      <Route path="/ice" exact component={Store} />
      <Route path="/dragon" exact component={Store} />
      <Route path="/electric" exact component={Store} />
      <Route path="/flying" exact component={Store} />
      <Route path="/fighting" exact component={Store} />
      <Route path="/poison" exact component={Store} />
      <Route component={Error404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
