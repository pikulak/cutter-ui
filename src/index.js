import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Root from './containers/Root';
import registerServiceWorker from './workers/ServiceWorker';

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();

