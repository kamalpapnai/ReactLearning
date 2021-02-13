import React from 'react';

function ShowURLParams({match})
{
  return (
      <>
      <h3>Passed Parameters are: {match.params.fname} {match.params.lname}</h3>
      </>
  )
}

export default ShowURLParams