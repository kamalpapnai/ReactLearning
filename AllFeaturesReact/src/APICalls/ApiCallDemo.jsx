import React, { useState,useEffect } from 'react';
import Axios from 'axios';
import axios from 'axios';


function ApiCallDemo()
{
    const [num, updateNum] = useState();
    const [data, updateData] = useState({
        name:'',
        noOfMoves:'',
        weight:'',
        height:'',
    })
    
    useEffect(() => {
       async function getData(){
           const result= await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
           updateData({
            name:result.data.name,
            noOfMoves:result.data.moves.length,
            weight:result.data.weight,
            height:result.data.height,
           })
       }

       if(typeof(num)!='undefined')
       getData();
    })

  return (
      <>

      <h1>You choose {num} value.</h1>
     { 
     data.name!=''?<div>
          <h3>Name of Your Pokemon:{data.name}</h3>
          <h2>No of Moves:{data.noOfMoves}</h2>
          <h2>Weight:{data.weight}</h2>
          <h2>Height:{data.height}</h2>
      </div>:null}
      <select value={num} onChange={(event)=>{
        updateNum(event.target.value)
      }}>
          <option value="1">1</option>
          <option value="25">25</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
      </select>
      </>
  )
}

export default ApiCallDemo