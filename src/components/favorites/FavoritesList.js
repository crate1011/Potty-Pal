import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Card, CardBody, CardSubtitle, CardText, CardTitle } from "reactstrap"
import "./favorite.css"
export const FavoritesList = () => {

    const [favorites, setFavorites] = useState([])

    const localPottyUser = localStorage.getItem("potty_user")
    const pottyUserObject = JSON.parse(localPottyUser)        


    useEffect(
        () => {
            fetch(`http://localhost:8088/favoriteEstablishments?_expand=establishment`)
                .then(response => response.json())
                .then((favoritesArray) => {
                    setFavorites(favoritesArray)
                })
        },

        []
    )

    return <>
        {
            favorites.map(
                (favorite) => {
                    return <Card className="cards"
                    style={{
                      width: '18rem'
                    }}
                  >
                    <img
                      alt=""
                      src={favorite.establishment.img}
                    />
                    <CardBody>
                      <CardTitle tag="h5">
                      <Link className="theLink" to={`/establishment/${favorite.establishment.id}`}> {favorite.establishment.name}</Link>
                      </CardTitle>
                      <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                      >
                       {favorite.establishment.ddress}
                      </CardSubtitle>
                      <CardText>
                        {favorite.establishment.description}
                      </CardText>
                    </CardBody>
                  </Card>
                }
            )
        }
    </>
}