import { Link } from "react-router-dom"
import { Card, CardBody, CardSubtitle, CardText, CardTitle, OffcanvasBody, OffcanvasHeader } from "reactstrap"

//creates a review card for each review in my database
export const Favorite = ({currentUser, favObject, id, name, address, description, img, getFavorites }) => {

    const localPottyUser = localStorage.getItem("potty_user")
    const pottyUserObject = JSON.parse(localPottyUser)

    const deleteFavorite = () => {
        if (currentUser === pottyUserObject.id) {
            return <button onClick={() => {
                fetch(`http://localhost:8088/favoriteEstablishments/${favObject.id}`, {
                    method: "DELETE",
                })
                .then(getFavorites)
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
        src={img}
    />
    <CardBody>
        <CardTitle tag="h5">
            <Link className="theLink" to={`/establishment/${id}`}> {name}</Link>
        </CardTitle>
        <CardSubtitle
            className="mb-2 text-muted"
            tag="h6"
        >
            {address}
        </CardSubtitle>
        <CardText>
            {description}
        </CardText>
        {
            deleteFavorite()
        }
    </CardBody>
</Card>
}