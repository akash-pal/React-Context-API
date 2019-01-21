import React, { Component } from 'react';

// first we make a new context
const MyContext = React.createContext();

// create a new provider component
class MyProvider extends Component {

  state = {
    name: 'Akash',
    age: 25
  }

  render() {
    return (
      <MyContext.Provider value={{
        state: this.state,
        growAYearOld: () => this.setState({
          age: this.state.age + 1
        })
      }}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

const Middle = (props) => (
  <div>
    <div>I am Middle Component</div>
    <Person></Person>
  </div>
)

class Person extends Component {
  render() {
    return (

      <MyContext.Consumer>
        {(context) => (
          <React.Fragment>
            <p> My name is {context.state.name}</p>
            <p> My age is {context.state.age}</p>
            <button onClick={context.growAYearOld}>Increase Age</button>
          </React.Fragment>

        )}
      </MyContext.Consumer>

    );
  }
}

class App extends Component {

  render() {
    return (
      <MyProvider>
        <div>I a Parent Container</div>
        <Middle></Middle>
      </MyProvider>
    );
  }
}

export default App;
