import { Outlet, Route, Routes } from "react-router-dom"
import { EstablishmentRequestForm } from "../establishmentRequest.js/EstablishmentRequest"
import { EstablishmentContainer } from "../establishments/EstablishmentContainer"
import { FavoritesList } from "../favorites/FavoritesList"
import { ReviewContainer } from "../review/ReviewContainer"

export const CustomerViews = () => {
    return (
        <Routes>
            <Route path="/" element={
                <>
                    <Outlet />
                </>
            }>

                <Route path="/" element={<EstablishmentContainer />} />
                <Route path="/establishment/:establishmentId" element={<ReviewContainer />} />
                <Route path="/favorite/locations" element={<FavoritesList />} />
                <Route path="/establishment/create" element={<EstablishmentRequestForm/>} />

            </Route>
        </Routes>
    )
}