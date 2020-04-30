import React from 'react'

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

export default Card