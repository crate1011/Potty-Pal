import { CustomerNavBar } from "./CustomerNav"
import { EmployeeNavBar } from "./EmployeeNav"
import "./NavBar.css"

//navBar will check to see if the user is a staff member and will display the correct navbar
export const NavBar = () => {
    const localPottyUser = localStorage.getItem("potty_user")
    const pottyUserObject = JSON.parse(localPottyUser)

    if (pottyUserObject.staff === true) {
        return <EmployeeNavBar />
    }
    else {
        return <CustomerNavBar />
    }

    
}