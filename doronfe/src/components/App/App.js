import React from "react";
import { Header, Footer } from "../Layout";
import { routes } from "../../config/routes-config";
import { Switch, Route } from "react-router-dom";
import "bulma/css/bulma.css";
import { NotFoundPage } from "../Pages";

function App() {
  return (
    <div className="container">
      <Header />
      <div className="content">
        <div className="center">
          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                component={route.component}
                exact={route.exact}
              />
            ))}
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
