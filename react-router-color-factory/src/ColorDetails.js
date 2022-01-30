import { Link } from "react-router-dom"
import { Button } from "@mui/material"

import "./ColorDetails.css"
const ColorDetails = ({color})=> {
    console.log(color.name)
    return (
        <div className="ColorDetails" style={{backgroundColor: color.hexidecimal}}>
        <h1>THIS IS {color.name.toUpperCase()}</h1>
        <h1>ISNT IT BEAUTIFUL</h1>
        <Button variant="contained"><Link exact to="/color">GO BACK</Link></Button>
        
        </div>
    )
}

export default ColorDetails