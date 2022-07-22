import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const CustomerNavBar = () => {
    const navigate = useNavigate()

    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link color="orange" className="navbar__link" to="/searchProducts">Find Kandy</Link>
            </li>
                
            <li className="navbar__item navbar__logout">
                <Link color="orange" className="navbar__link" to="" onClick={() => {
                    localStorage.removeItem("potty_user")
                    navigate("/", {replace: true})
                }}>Logout</Link>
            </li>
        
    </ul>

    )
}