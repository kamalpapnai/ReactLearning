import axios from 'axios';
import React, { useState } from 'react';

function SearchResult(props)
{
    const imageURL = `https://source.unsplash.com/300x300?${props.keyword}`;
   
    return (
      <>
      <div>
         {props.keyword!=''?<img src={imageURL} alt="Keyword Image"/>:null}
      </div>
      </>
  )
}

export default SearchResult