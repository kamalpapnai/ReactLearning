import React from 'react';
import course, {favoriteWebsite,getUserName} from './file';

function ImportExports()
{
    return (
        <>
        <h4>{course}</h4>
        <h4>{favoriteWebsite}</h4>
        <h4>{getUserName().name}</h4>
        </>
    )
}

export default ImportExports;