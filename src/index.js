import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { store, history } from "./app/store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import { ConnectedRouter } from "connected-react-router";
import { Route } from "react-router";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store()}>
      <ConnectedRouter history={history}>
        <>
          <Route exact path="/" render={() => <App />} />
          <Route
            exact
            path="/test"
            render={() => (
              <>
                <h1>test</h1>
              </>
            )}
          />
          <Route render={() => <div>Miss</div>} />
        </>
      </ConnectedRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
