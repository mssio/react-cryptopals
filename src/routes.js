import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ComingSoonPage from './components/ComingSoonPage';

import C1Step1Page from './components/cryptopals/challenge-1/C1Step1Page';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="about" component={AboutPage}/>
    <Route path="coming-soon" component={ComingSoonPage}/>
    <Route path="challenge/1/step/1" component={C1Step1Page}/>
  </Route>
);
