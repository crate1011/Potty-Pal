import { useEffect, useState } from "react"

import { Favorite } from "./Favorite"
import "./favorite.css"

export const FavoritesList = () => {

    const [favorites, setFavorites] = useState([])

    const localPottyUser = localStorage.getItem("potty_user")
    const pottyUserObject = JSON.parse(localPottyUser)        

    useEffect(
        () => {
            fetch(`http://localhost:8088/favoriteEstablishments?_expand=establishment&userId=${pottyUserObject.id}`)
                .then(response => response.json())
                .then((favoritesArray) => {
                    setFavorites(favoritesArray)
                })
        },
        []
    )

    const getFav = () => {
        fetch(`http://localhost:8088/favoriteEstablishments?_expand=establishment&userId=${pottyUserObject.id}`)
            .then(response => response.json())
            .then((favArray) => {
                setFavorites(favArray)
            })
    }

    return <>
         <article className="reviews">
            {
                favorites.map(favorite=> <Favorite favoriteObject={favorite} getFav={getFav} key={`post--${favorite.id}`}
                />)
            }
        </article>

    </>
}