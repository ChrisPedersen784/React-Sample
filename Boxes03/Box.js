import React from "react"

export default function Box(props) {
    const styles = {
        backgroundColor: props.on ? "#222222" : "transparent"
    }
    
    return (
        <div 
            style={styles} 
            className="box"
            //we create a method inside the onClick
            //props.id gets passed inside of toggle(id)
            onClick={()=>props.toggle(props.id)}
        >
        </div>
    )
}