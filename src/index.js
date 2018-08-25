import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'base/containers/Root';
import registerServiceWorker from 'base/registerServiceWorker';
import configureStore from 'base/redux/configureStore';

const store = configureStore();

ReactDOM.render(<Root store={store} />, document.getElementById('root'));
registerServiceWorker();
