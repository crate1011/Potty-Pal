import { Outlet, Route, Routes } from "react-router-dom"
import { NewEstablishmentList } from "../establishmentRequest.js/NewEstablishmentList"
import { EstablishmentContainer } from "../establishments/EstablishmentContainer"
import { FavoritesList } from "../favorites/FavoritesList"
import { ReviewContainer } from "../review/ReviewContainer"
import { UserDetails } from "../users/UserDetails"
import { UserList } from "../users/UserList"


export const EmployeeViews = () => {
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
                <Route path="/user/list" element={<UserList />} />
                <Route path="user/:userId" element={ <UserDetails/> } />
                <Route path="/establishment/requests" element={ <NewEstablishmentList/> } />
            </Route>
        </Routes>
    )
}