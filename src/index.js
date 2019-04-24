import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import ReactGA from 'react-ga';
import './css/fonts.css';
ReactGA.initialize('UA-78476101-1');
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(<App />, document.getElementById('root'));