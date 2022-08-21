import React from "react"



export default function Card(props){
    return (
        <div className="Card">
            <img src={`../images/${props.item.img}`} className="Card--Img" ></img>
            <div className="Card--Content">
            <p className="Card--Country"> <img src="./images/Fill.png"></img> {props.item.country} <span className="google--maps">View on Google Maps</span> </p>
            <h3> {props.item.location} </h3>
            <span className="Card--Date"> {props.item.date} </span>
            <p> {props.item.text} </p>
            <hr/>
            </div>
        </div>
    )
}