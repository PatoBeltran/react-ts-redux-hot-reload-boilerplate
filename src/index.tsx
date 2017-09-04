import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from "react-hot-loader";
import App from './components/App';
import registerServiceWorker from './scripts/registerServiceWorker';

const rootEl = document.getElementById("root");
ReactDOM.render(
  <AppContainer>
    <App />
  </AppContainer>,
  rootEl
);

registerServiceWorker();

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept();
  
  const NextApp = require<{default: typeof App}>("./components/App").default;

  module.hot.dispose(() => {
    ReactDOM.render(
      <AppContainer>
        <NextApp />
      </AppContainer>
      ,
      rootEl
    );
  });
}