import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import Clicker from "./components/Clicker";
import HardState from "./components/HardState";
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/home" component={HomePage} />
          <Route path="/clicker" component={Clicker} />
          <Route path="/hardState" component={HardState} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
