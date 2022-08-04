import { Link} from "react-router-dom"
import { About } from "./About"
import { Contact } from "./Contact"
import "./footer.css"
import { Support } from "./Support"
export const Footer = () => {

    return (
        <ul className="footer">
            <li className="footer__item active">
                {About()}
            </li>
            <li className="footer__item active">
                {Support()}
            </li>
            <li className="footer__item active">
              {Contact()}
            </li>
        
    </ul>

    )
}