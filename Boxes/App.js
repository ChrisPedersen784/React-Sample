import React from "react"
import boxes from "./boxes"

export default function App() {
    /**
     * Challenge part 1:
     * 1. Initialize state with the default value of the
     *    array pulled in from boxes.js
     * 2. Map over that state array and display each one
     *    as an empty square (black border, transparent bg color)
     *    (Don't worry about using the "on" property yet)
     */
    
    const [box, setBox] = React.useState(boxes)
    
    const getBoxes = box.map(item =>  {
        return (
            <div className="box">
            {item.id}
            {item.on}
            </div>
        )
    })
    

    
    return (
        <main>
            <h1>Boxes will go here</h1>

            {getBoxes}
            
        </main>
    )
}
