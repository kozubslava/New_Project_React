import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <BrowserRouter>
        <HomePage />
        <Switch>
          <Route path='/login' component={LoginPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
