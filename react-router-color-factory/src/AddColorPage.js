import { Link } from "react-router-dom"
import { Button } from "@mui/material"
import './AddColorPage.css'

const AddColorPage = () => {
    return (
        <div className="AddColorPage">
            <h1>Welcome to the Color Factory</h1>
            <Button variant="contained"><Link exact to='/colors/new'>Add Color</Link></Button>
            
        </div>
    )

}

export default AddColorPage