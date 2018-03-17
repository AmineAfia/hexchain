// @flow
import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginView from "./components/content/LoginView";
import DoctorView from "./components/content/DoctorView";
import OrgaView from "./components/content/OrgaView";
import Home from "./components/Home";

import "./index.scss";

const routes = [
  {
    path: "/",
    exact: true,
    id: 0,
    component: () => {
      return <div>Hello World!</div>;
    }
  }
];

const App = () => (
  <BrowserRouter>
    <div className="top">
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/login" component={LoginView} exact />
        <Route path="/doctor" component={DoctorView} exact />
        <Route path="/orga" component={OrgaView} exact />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
