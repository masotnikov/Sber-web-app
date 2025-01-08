import React from 'react';
import styles from './App.module.scss';
import TestComp from "./TestComp/TestComp";

const App = () => {
    return (
        <div className={styles.App}>
            <h2>hello dddddd!</h2>
            <TestComp arg={'4'}/>
           d
        </div>
    );
};

export default App;