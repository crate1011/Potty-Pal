import { useState } from "react"
import { Favorite } from "./Favorite"

//parent container to allow the children to have access to the same data
export const FavoriteContainer = () => {
    const [favorites, setFavs] = useState([])

    const localPottyUser = localStorage.getItem("potty_user")
    const pottyUserObject = JSON.parse(localPottyUser)     

    const getFav = () => {
        fetch(`http://localhost:8088/favoriteEstablishments?userId=${pottyUserObject.id}`)
            .then(response => response.json())
            .then((favArray) => {
                setFavs(favArray)
            })
    }

    return <>
        <Favorite getFavorites={getFav} />
    </>
}