import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

export default function List() {
    const [apod, setApod] = useState([])

    useEffect(() => {
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=S5uozfhVZV83nUoN0waHsaeew7HvwAWL2CsbD8iv`)
            .then(response => {
                setApod(response.data)
                console.log(response.data)
            })
            .catch(error => {
                console.log("Error: ", error)
            });
    }, []);

    return (
        <div className="apod-list">
            <Card
                key={apod.data}
                title={apod.title}
                explanation={apod.explanation}
                date={apod.date}
                url={apod.hdurl}
            />
        </div>
    )
}