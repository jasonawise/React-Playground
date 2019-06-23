import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { title: 'React Playground', description: 'This is to learn and play around with React.' };
  }

  render() {
    const { title, description } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    );
  }
}

export default App;
