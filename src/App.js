import { hot } from 'react-hot-loader/root';
import React, { Component } from 'react';

// Loading Warning component asynchronously (only when required)
const Warning = React.lazy(() => import('./Warning'));

class App extends Component {
  state = {
    count: 0
  };

  increment = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  };

  decrement = () => {
    this.setState(prevState => ({ count: prevState.count - 1 }));
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>Hello World!!!</h1>
        <h2 className={count > 5 ? 'warning' : null}>
          Count: {this.state.count}
        </h2>
        <button onClick={this.increment}>+1</button>
        <button onClick={this.decrement}>-1</button>
        {count > 5 ? (
          <React.Suspense fallback={null}>
            <Warning />
          </React.Suspense>
        ) : null}
      </div>
    );
  }
}

export default hot(App);
