import React from "react"



export default function Star(props){
    //here staIcon checks if isFilled from App.js is true or false and sets the images
    const starIcon = props.isFilled ? "star-filled.png" : "star-empty.png"
    const clicked = props.onClick 
    return (
         <img 
              src={`../images/${starIcon}`} 
              className="card--favorite"
              onClick={clicked}
                />
    )
}