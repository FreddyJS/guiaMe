import App from './App';
import './index.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux'
import reportWebVitals from './reportWebVitals';
import configureStore from './store'

const store = configureStore()

const renderApp = () => {
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
    document.getElementById('root')
  )
  
  if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('./App', renderApp)
  }
}

renderApp();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
