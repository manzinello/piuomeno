import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import PiuomenoApp from './PiuomenoApp';

ReactDOM.render(<PiuomenoApp />, document.getElementById('root'));
registerServiceWorker();
