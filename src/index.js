import React from 'react';
import ReactDOM from 'react-dom';
import DisplayData from './components/DisplayData';
import Form from './components/Form'
import ParentComponent from './components/ParentComponent';

ReactDOM.render(
  <div>
    <ParentComponent />
  </div>,
  document.getElementById('root')
);