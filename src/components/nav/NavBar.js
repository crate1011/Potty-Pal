import { CustomerNavBar } from "./CustomerNav"
import { EmployeeNavBar } from "./EmployeeNav"
import "./NavBar.css"


export const NavBar = () => {
    const localPottyUser = localStorage.getItem("potty_user")
    const pottyUserObject = JSON.parse(localPottyUser)

    if (pottyUserObject.staff) {
        return <EmployeeNavBar />
    }
    else {
        return <CustomerNavBar />
    }

    
}