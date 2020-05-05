import React, { useState } from 'react'
import { Button, Badge, Collapse } from 'reactstrap'

const Card = props => {

    const [open, set] = useState(false)
    const toggle = () => set(!open)

    /*
    if (!props.photoOfTheDay) {
            return (
                <div className="loading">
                    <p>Loading...</p>
                    <Spinner color="primary" />
                </div>
        )
    }
    */

    return (
        <div className='card'>
            <h1><Badge color="primary">NEW!</Badge> NASA APOD</h1>
            <p><a href="https://apod.nasa.gov/apod/archivepix.html">NASA's Picture of the day</a><br></br>Every single a day an image of our universe is shared from NASA, with a nice explanation of the image!  Utilizing NASA's APOD API we are able to provide an excellent read for you!</p>
            <p>Today is: <b><i>{props.date}</i></b></p>
            <h2>{props.title}</h2>
            <img src={props.url} alt="daily astronomy pic"></img>
            <Button color="primary" onClick={toggle}>Toggle Explanation</Button>
            <Collapse isOpen={open}>
                {props.explanation} <br></br>
                <p><a href="https://apod.nasa.gov/apod/archivepix.html"><Button color="warning">Check out some more pictures!</Button></a></p>
            </Collapse>
        </div>
    )
}

/*

// Before Advanced Styling Techniques project.

const Card = props => {

    return (
        <div className='card'>
            <h1>NASA APOD</h1>
            <p><a href="https://apod.nasa.gov/apod/archivepix.html">NASA's Picture of the day</a><br></br>Every single a day an image of our universe is shared from NASA, with a nice explanation of the image!  Utilizing NASA's APOD API we are able to provide an excellent read for you!</p>
            <p>Today is: <b><i>{props.date}</i></b></p>
            <h2>{props.title}</h2>
            <img src={props.url} alt="daily astronomy pic"></img>
            <p>About this image: <br></br> {props.explanation}</p>
        </div>
    )
}
*/

export default Card