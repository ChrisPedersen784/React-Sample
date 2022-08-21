import React from "react"
import boxes from "./boxes"
import Box from "./Box"

export default function App() {
    const [squares, setSquares] = React.useState(boxes)
    
    function toggle(id) {
        setSquares(prevSquares => {
            //creates new variable to hold new sqaures
            const newSquares = []
            //loops through prevSqaures.length
            for(let i = 0; i < prevSquares.length; i++) {
                //creates a new variable to hold the prevSqaure(which is the props.id from the onClick)
                const currentSquare = prevSquares[i]
                //Check if currentSqaure === id(props.id from onClick)
                if(currentSquare.id === id) {
                    //update by saving all the currentsqaures plus changes the specifc on object to the oppisite boolean which turns the color on or off
                    const updatedSquare = {
                        ...currentSquare,
                        on: !currentSquare.on
                    }
                    //pushing the updated sqaures into the newsqaures array if any change has occurred
                    newSquares.push(updatedSquare)
                } else {
                    //else push currentsqaures to newSqaures
                    newSquares.push(currentSquare)
                }
            }
            //lastly return the aray newSqaures
            return newSquares
        })
    }
    
    const squareElements = squares.map(square => (
        <Box 
            key={square.id} 
            id={square.id}
            on={square.on} 
            //Call toggle so the method will workin <Box />
            toggle={toggle}
        />
    ))
    
    return (
        <main>
            {squareElements}
        </main>
    )
}
