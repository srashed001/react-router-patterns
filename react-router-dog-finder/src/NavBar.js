import { NavLink } from "react-router-dom"
import "./NavBar.css"

const NavBar = ({dogs}) => {
    return (
        <nav>
            <NavLink exact to="/dogs" >Home</NavLink>
            {dogs.map(dog => <NavLink key={dog.name} to={`/dogs/${dog.name.toLowerCase()}`}>{dog.name}</NavLink>)}
        </nav>
    )

}

export default NavBar