import React, { Component } from 'react';

class Ranking extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <tr className="Sample">
        <td>{this.props.rank}</td>
        <td>{this.props.team}</td>
      </tr>
    );
  }
}

export default Ranking;
