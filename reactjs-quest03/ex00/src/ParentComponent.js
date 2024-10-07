import React, { Component } from 'react';
import ChildComponent from './ChildComponent.js';

export class ParentComponent extends Component {
  render() {
    return (
      <h1>
        <span className="title">I'm the parent component.</span>
        <ChildComponent text={"Child 1"} />
        <ChildComponent text={"Child 2"} />
        <ChildComponent text={"Child 3"} />
      </h1>
    );
  }
}

export default ParentComponent;
