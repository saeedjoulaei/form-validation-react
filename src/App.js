import React from "react";
// import SignUp from "./components/SignUp";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/SignUp" component={SignUp} />
        <Redirect from="/" to="/Signup" />
      </Switch>
      {/* <SignUp /> */}
      <Login />
    </div>
  );
};

export default App;
