import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
var data = [
	{rank: 1, team: "ロアッソ	熊本"},
	{rank: 2, team: "アビスパ福岡"}
];
ReactDOM.render(
  <App data={data}/>,
  document.getElementById('root')
);
