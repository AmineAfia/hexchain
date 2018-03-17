import * as React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Web3 from "web3";
import TruffleContract from "truffle-contract";

import LoginView from "./components/content/LoginView";
import DoctorView from "./components/content/DoctorView";
import OrgaView from "./components/content/OrgaView";
import Home from "./components/Home";

import Health from "../build/contracts/Health.json";

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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      account: "0x0",
      candidates: [],
      hasVoted: false,
      loading: true,
      voting: false,
      patients: []
    };

    if (typeof web3 != "undefined") {
      this.web3Provider = web3.currentProvider;
    } else {
      this.web3Provider = new Web3.providers.HttpProvider(
        "http://localhost:7545"
      );
    }

    this.web3 = new Web3(this.web3Provider);

    this.health = TruffleContract(Health);
    this.health.setProvider(this.web3Provider);
  }

  componentDidMount() {
    // TODO: Refactor with promise chain
    this.web3.eth.getCoinbase((err, account) => {
      this.setState({ account });

      // get an instance of the Health contract
      this.health.deployed().then(healthInstance => {
        this.healthInstance = healthInstance;
        this.healthInstance.patientsCount().then(patientsCount => {
          for (var i = 1; i <= patientsCount; i++) {
            this.healthInstance.patients(i).then(patient => {
              const patients = [...this.state.patients];
              patients.push({
                id: patient[0],
                name: patient[1],
                age: patient[2],
                nationality: patient[3],
                city: patient[4],
                country: patient[5],
                balance: patient[6]
              });
              this.setState({ patients: patients });
              console.log(this.state.patients);
            });
          }
        });
      });
    });
  }

  watchEvents() {
    // TODO: trigger event when vote is counted, not when component renders
    this.electionInstance
      .votedEvent(
        {},
        {
          fromBlock: 0,
          toBlock: "latest"
        }
      )
      .watch((error, event) => {
        this.setState({ voting: false });
      });
  }

  render() {
    return (
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
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
