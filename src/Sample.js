import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Ranking from './Ranking';

class Sample extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    var commentNodes = this.props.data.map((comment)=> {
      return(<Ranking rank={comment.lank} team={comment.team}/>);
    });
    return (
      <div className="Sample">
        <div className="Sample-header">
          <h2>J2にようこそ!</h2>
        </div>
        <div>
          <table>
            <tr>
              <th>順位</th>
              <th>チーム</th>
            </tr>
            {commentNodes}
          </table>
        </div>
      </div>
    );
  }
}

export default Sample;
