import React, { useState } from 'react';
import SearchResult from './SearchResult';

function Search()
{
    const [img,setImg] = useState("");

    const handleInputChange = (event)=>{
      setImg(event.target.value);
    }
    
  return (
      <>
      <h3>Search using Filter</h3>
      <br/>
      <input type="search" className="input" placeholder="Enter Key" onChange={handleInputChange} value={img}/>
      <SearchResult keyword={img}/>
      </>
  )
}

export default Search