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

    return <>
         <article className="reviews">
            {
                favorites.map(favorite=> <Favorite key={`post--${favorite.id}`}
                    id={favorite.id}
                    currentUser={favorite.userId}
                    favObject={favorite}
                    name={favorite?.establishment?.name}
                    address={favorite?.establishment?.address}
                    description={favorite?.establishment?.description}
                    img={favorite?.establishment?.img}
                />)
            }
        </article>

    </>
}