import React from 'react';
import ReactDOM from 'react-dom';

const title = 'Is it working?';

ReactDOM.render(
    <div>{title}</div>,
    document.getElementById('root')  
);

module.hot.accept();