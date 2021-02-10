import React from 'react';
import {add,sub,multiply,divide} from './calculator';
import Challenge3 from './Challenge3';

function Challenge4()
{
    return (
        <>
        <h4>Addition:{add(5,1)}</h4>
        <h4>Subtraction:{sub(5,1)}</h4>
        <h4>Multiplication:{multiply(5,1)}</h4>
        <h4>Divide:{divide(5,1)}</h4>
        </>
    )
}

export default Challenge4