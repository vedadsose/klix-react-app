import React from 'react';
import ReactDOM from 'react-dom';
import ShareBox from './index';

describe('ShareBox', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ShareBox />, div);
  });
});
