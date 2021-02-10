import React from 'react'

function Card(props)
{
  return (
    <>
      <div className="card">
        <img src = {props.imgSrc}
        alt="myPic"
        className="card_img">
        </img>
       <div className="card_info">
        <span className="card_category">{props.title}</span>
        <h3 className="card_title">{props.seriesName}</h3>
        <a href={props.link} target="_blank">
        <button className="btn">Watch Now</button>
        </a>
       </div>
      </div>
    </>
  )
}

export default Card