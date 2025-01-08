import React from 'react';
import './index.scss';

const App = () => {
    return (
        <div className='app'>
            <h2>hello world!</h2>
            <div>{__PLATFORM__}</div>

        </div>
    );
};

export default App;