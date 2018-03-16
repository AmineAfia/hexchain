// @flow
import * as React from 'react';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';

import './index.scss';

const routes = [
  {
    path: '/',
    exact: true,
    id: 0,
  component: ()=>{ return( <div>Hello World!</div>)},
  }
];

const App = () => (
  <BrowserRouter>
    <div className="top">
      <div className="header">
      </div>
      <div className="content">
        {
                    routes.map(route => (
                      <Route
                        key={route.id}
                        path={route.path}
                        component={route.component}
                      />
                        ))
                }
      </div>
      <div className="footer">
      </div>
    </div>
  </BrowserRouter>
);

export default App;
