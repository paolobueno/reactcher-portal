import * as React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Navigation />
      </div>
    );
  }
}

export default App;