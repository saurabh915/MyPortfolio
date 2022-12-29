import React from 'react'
import './Card.css'
function Card(props) {
  return (       
    <div className="card " style={{left: "14rem"}}>
        <img src={props.emoji} alt=""  />
        <span>{props.heading}</span>
        <span>{props.detail}</span>
        {/* <button className="c-button">LEARN MORE</button> */}
    </div>   
  )
}

export default Card