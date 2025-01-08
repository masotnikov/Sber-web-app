import React, {useState} from 'react';
import styles from './TestComp.module.scss'

const TestComp = ({arg}: { arg: string }) => {
    const [count, setCount] = useState(0)

    return (
        <div className={styles.root}>
            <h2 style={{ color: 'black', fontSize: '2rem' }}>
                111  {arg}
            </h2>
            <div>{count}</div>
            <button onClick={() => setCount(prev => prev + 1)}>Inc</button>
        </div>
    );
};

export default TestComp;