import React, { Component } from "react";
import { Provider } from "react-redux";

import Main from "./pages/Main";

import GlobalStyles from "./GlobalStyles";

import store from "./store";

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyles />
        <Provider store={store}>
          <Main />
        </Provider>
      </>
    );
  }
}

export default App;
