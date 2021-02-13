import React from 'react';
import {useParams, useLocation, useHistory} from 'react-router-dom';

function ShowURLParamsUsingUseParams()
{
    const {fname,lname} = useParams();
    const location  = useLocation();
    const history = useHistory();

    let isAdmin = false;
    if(location.pathname.split('/')[2]=='Kamal')
    {
       isAdmin = true;
    }
  return (
      <>
      <h3>Passed Parameters are {fname} {lname}</h3>
      <h5>My current URL is:{location.pathname}</h5>
      {
          isAdmin?<button className="btn">Admin Button</button>:null
      }
      <button onClick={history.goBack} className="btn">Go Back</button>
      </>
  )
}

export default ShowURLParamsUsingUseParams