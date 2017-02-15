import React from 'react';

import { render } from 'react-dom';

// Import css
// import css from './styles/style.styl';

// Import Components
import App from './components/App';
import Test1 from './components/Test1';
import Test2 from './components/Test2';
import List from './components/List';
// import timers.setImmediate(callback, arg1, arg2, arg3); from './components/timers.setImmediate(callback, arg1, arg2, arg3);';

// import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={List}></IndexRoute>
        <Route path="/otherRoute" component={Test2}></Route>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'));
