import React, { useState } from 'react';

function CounterHooks() {
    const state = useState();
    let [count, setCount] = useState(0);

    function IncrementNumber() {
        setCount(count + 1);
    }

    return (
        <>
            <div className="div-center">
                <h1 className="h_center">{count}</h1>
                <button className="btn" onClick={IncrementNumber}>Click Me</button>
            </div>
        </>
    )
}

export default CounterHooks;