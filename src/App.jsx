// @flow
import * as React from 'react';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';
import Web3 from 'web3'
import TruffleContract from 'truffle-contract'
import Election from '../build/contracts/Election.json'

import './index.scss';

const routes = [
  {
    path: '/',
    exact: true,
    id: 0,
  component: ()=>{ return( <div>Hello World!</div>)},
  }
];
class App extends React.Component {
  render() {
    return (
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
    )
  }
}
  ReactDOM.render(
    <App />,
    document.querySelector('#root')
 )

export default App;
