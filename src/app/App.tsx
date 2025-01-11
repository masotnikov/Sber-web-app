import React from 'react';
import '@/shared/styles/index.scss';

const App = () => {
    return (
        <div className='app'>
            <h5>йцукенгшщзхъфывапролджэ</h5>
            <h6>1234567890</h6>
            <h2>hello world!</h2>
            <div>{__PLATFORM__}</div>

        </div>
    );
};

export default App;