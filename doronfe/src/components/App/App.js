import React from "react";
import Header from "../Header";
import HomePage from "../HomePage";
import AboutPage from "../AboutPage";
import ContactUsPage from "../ContactUsPage";
import NotFoundPage from "../NotFoundPage";
import { Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contactus" component={ContactUsPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
