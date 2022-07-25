import { Outlet, Route, Routes } from "react-router-dom"
import { EstablishmentContainer } from "../establishments/EstablishmentContainer"
import { EstablishmentList } from "../establishments/EstablishmentList"
import { EstablishmentSearch } from "../establishments/EstablishmentSearch"

export const EmployeeViews = () => {
    return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1 className="potty__pal">Potty Pal</h1>
                    <div className="potty__pal2">We Do Our Bussiness So You Can Do Yours</div>

                    <Outlet />
                </>
            }>
                <Route path="/" element={ <EstablishmentContainer /> } />
                
            </Route>
        </Routes>
    )
}