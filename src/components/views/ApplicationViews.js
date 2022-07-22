import { EmployeeViews } from "./EmployeeView"
import { CustomerViews } from "./CustomerView"

export const ApplicationViews = () => {
	const localPottyUser = localStorage.getItem("potty_user")
    const pottyUserObject = JSON.parse(localPottyUser)
	
	if (pottyUserObject.staff) {
		return <EmployeeViews />
	}
	else {
		return <CustomerViews />
	}
}
