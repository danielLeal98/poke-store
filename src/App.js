import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle from './styles/global';

import Home from './pages/Home';
import Grass from './pages/Grass';
import Psychic from './pages/Psychic';
import Water from './pages/Water';
import Fire from './pages/Fire';
import Fighting from './pages/Fighting';
import Flying from './pages/Flying';
import Poison from './pages/Poison';
import Rock from './pages/Rock';
import Ghost from './pages/Ghost';
import Ice from './pages/Ice';
import Dragon from './pages/Dragon';
import Shadow from './pages/Shadow';
import Eletric from './pages/Eletric';
import Error404 from '../src/components/Error';

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/grass" exact component={Grass} />
      <Route path="/psychic" exact component={Psychic} />
      <Route path="/water" exact component={Water} />
      <Route path="/fire" exact component={Fire} />
      <Route path="/fighting" exact component={Fighting} />
      <Route path="/flying" exact component={Flying} />
      <Route path="/poison" exact component={Poison} />
      <Route path="/rock" exact component={Rock} />
      <Route path="/ghost" exact component={Ghost} />
      <Route path="/ice" exact component={Ice} />
      <Route path="/dragon" exact component={Dragon} />
      <Route path="/shadow" exact component={Shadow} />
      <Route path="/eletric" exact component={Eletric} />
      <Route component={Error404} />
    </Switch>
  </Router>,
  document.getElementById('root')
);
