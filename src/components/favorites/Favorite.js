import { Link } from "react-router-dom"
import { Card, CardBody, CardSubtitle, CardText, CardTitle, OffcanvasBody, OffcanvasHeader } from "reactstrap"

//creates a review card for each review in my database
export const Favorite = ({favoriteObject, getFav }) => {

    const localPottyUser = localStorage.getItem("potty_user")
    const pottyUserObject = JSON.parse(localPottyUser)

    const deleteFavorite = () => {
        if (favoriteObject.userId === pottyUserObject.id) {
            return <button onClick={() => {
                fetch(`http://localhost:8088/favoriteEstablishments/${favoriteObject.id}`, {
                    method: "DELETE",
                })
                .then(getFav)
            }} className={"ticket__delete"}>delete favorite</button>
        }
        else {
            return ""
        }
    }

    return <Card className="cards"
    style={{
        width: '18rem'
    }}
>
    <img
        alt=""
        src={favoriteObject?.establishment?.img}
    />
    <CardBody>
        <CardTitle tag="h5">
            <Link className="theLink" to={`/establishment/${favoriteObject?.establishment?.id}`}> {favoriteObject?.establishment?.name}</Link>
        </CardTitle>
        <CardSubtitle
            className="mb-2 text-muted"
            tag="h6"
        >
            {favoriteObject?.establishment?.address}
        </CardSubtitle>
        <CardText>
            {favoriteObject?.establishment?.description}
        </CardText>
        {
            deleteFavorite()
        }
    </CardBody>
</Card>
}