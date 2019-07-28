import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import PointsContextProvider from './context/PointsContext';
import SelectTeamContentProvider from './context/SelectedTeamContext';

ReactDOM.render(
<PointsContextProvider>
  <SelectTeamContentProvider>
    <App />
  </SelectTeamContentProvider>
</PointsContextProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
