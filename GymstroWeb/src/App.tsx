import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { LoginPage } from "./views/login/Login";

function App() {
  return (
    <Switch>
      <Route path="/login" component={LoginPage} />
    </Switch>
  );
}

export default App;
