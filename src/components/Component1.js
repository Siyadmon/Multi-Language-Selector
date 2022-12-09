import React, { Component } from 'react';

import '../components/styles.css';

export class Component1 extends Component {
  render() {
    return (
      <div className="ItemDisplay">
        <h1 className="m-5 border p-5" style={{ backgroundColor: 'white' }}>
          {this.props.text1}
        </h1>
        <h1 className="m-5 border p-5" style={{ backgroundColor: 'white' }}>
          {this.props.text2}
        </h1>
        <h1 className="m-5 border p-5" style={{ backgroundColor: 'white' }}>
          {this.props.text3}
        </h1>
      </div>
    );
  }
}

export default Component1;
