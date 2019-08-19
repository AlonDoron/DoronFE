import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import HomePage from "../HomePage";
import AboutPage from "../AboutPage";
import ContactUsPage from "../ContactUsPage";
import NotFoundPage from "../NotFoundPage";
import { Switch, Route } from "react-router-dom";
import "bulma/css/bulma.css";

function App() {
  return (
    <div className="container">
      <Header />
      <div className="content">
        <div className="center">
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/contactus" component={ContactUsPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
