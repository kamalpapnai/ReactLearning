import React from "react";
import Card from "./Cards";
import movieData from "./data";

function DisplayUsingMap()
{
    return (
        <div className="cards">
        {movieData.map(function handleCardData(curValue) {
          return (
            <Card
              imgSrc={curValue.imgSrc}
              title={curValue.title}
              seriesName={curValue.seriesName}
              link={curValue.link}
            />
          );
        })}
      </div>
    );
}

function DisplayUsingArrow()
{
    return (
        <div className="cards">
        {movieData.map((curValue,index)=> 
            <Card
              key = {index}
              imgSrc={curValue.imgSrc}
              title={curValue.title}
              seriesName={curValue.seriesName}
              link={curValue.link}
            />
          )
        }
      </div>
    );
}

export  {DisplayUsingMap,DisplayUsingArrow}