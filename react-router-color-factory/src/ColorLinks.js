import { Link } from "react-router-dom"
import { Button } from "@mui/material"
import "./ColorLinks.css"
const ColorLinks = ({colors}) => {
    return (
        <div className="ColorLinks">
            {colors.map(color => (
                <Button sx={{ m: 1 }} variant="contained"><Link key={color.name} exact to={`/colors/${color.name}`}>{color.name}</Link></Button>
            ))}
        </div>
    )

}

export default ColorLinks