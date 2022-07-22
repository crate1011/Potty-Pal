import { Outlet, Route, Routes } from "react-router-dom"
import { EstablishmentList } from "../establishments/EstablishmentList"

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
                <Route path="/" element={< EstablishmentList/> } />
                
            </Route>
        </Routes>
    )
}