import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App name="suhas" age="30"/>, div);
  ReactDOM.render(<App name="kavitha" age="25"/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
