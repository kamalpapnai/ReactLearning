import React from "react";
import Card from "./Cards";

function DisplayHardCodedData() {
    return (
        <>
            <div className="cards">
                <Card imgSrc="https://wallpapercave.com/wp/wp4056410.jpg"
                    title="A Netflix Original Series"
                    seriesName="Dark"
                    link="https://www.netflix.com/in/title/80990668?source=35" />

                <Card imgSrc="https://wallpapercave.com/wp/wp4056410.jpg"
                    title="A Netflix Original Series"
                    seriesName="Extracurricular"
                    link="https://www.netflix.com/in/title/80990668?source=35" />

                    
                <Card imgSrc="https://wallpapercave.com/wp/wp4056410.jpg"
                    title="A Netflix Original Series"
                    seriesName="Stranger Things"
                    link="https://www.netflix.com/in/title/80990668?source=35" />
            </div>
        </>
    )
}

export default DisplayHardCodedData