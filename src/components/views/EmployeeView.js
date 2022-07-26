import { Outlet, Route, Routes } from "react-router-dom"
import { EstablishmentContainer } from "../establishments/EstablishmentContainer"
import { Review } from "../review/Review"
import { ReviewForm } from "../review/ReviewForm"
import { ReviewList } from "../review/ReviewList"

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
                <Route path="/establishment/:establishmentId" element={ 
                <>
                <ReviewForm />
                <ReviewList />
                </> } />
                
            </Route>
        </Routes>
    )
}