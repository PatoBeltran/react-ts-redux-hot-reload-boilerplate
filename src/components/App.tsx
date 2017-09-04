import * as React from 'react';
var testIcon = require('../assets/icon.svg');

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
          <img src={testIcon}/>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}