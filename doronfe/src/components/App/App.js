import React from "react";
import { Header, Footer } from "../Layout";
import { routes } from "../../config/routes-config";
import { Switch, Route } from "react-router-dom";
import "bulma/css/bulma.css";
import { NotFoundPage } from "../Pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="container">
      <ToastContainer autoClose={3000} hideProgressBar rtl />
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
