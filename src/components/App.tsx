import * as React from 'react';
var testIcon = require('../assets/icon.svg');

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>This is a boilerplate to start an app with React, Redux, Typescript and hot reloading</h2>
          <img src={testIcon}/>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/components/App.tsx</code> or <code>src/containers/Main.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}