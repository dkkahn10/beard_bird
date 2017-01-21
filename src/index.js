import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import noah from '../public/assets/noah.png';
import tree from '../public/assets/plastic-pine-tree.png';

ReactDOM.render(
  <App
    noah={noah}
    tree={tree}
   />,
  document.getElementById('root')
);
