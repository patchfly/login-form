import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'base/containers/Root';
import registerServiceWorker from 'base/registerServiceWorker';

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
