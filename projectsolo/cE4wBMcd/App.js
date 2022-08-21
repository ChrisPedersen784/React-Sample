import React from "react"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import TravelData from "./TravelData"





export default function App(){
    const data = TravelData.map(item => {
        return (
             <Card 
             key={item.id}
             item={item}
             />
        )
    })
    return (
        <div>
         <Navbar />
        {data}
        </div>
    )
}