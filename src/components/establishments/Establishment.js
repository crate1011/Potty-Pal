import { Link, Navigate } from "react-router-dom"
import { Card, CardBody, CardSubtitle, CardText, CardTitle } from "reactstrap"
import "./establishments.css"


export const Establishment = ({ id, name, address, establishmentObject, description, img }) => {

    const localPottyUser = localStorage.getItem("potty_user")
    const pottyUserObject = JSON.parse(localPottyUser)

    const SetFavorite = () => {
        const favToSendToAPI = {
            userId: pottyUserObject.id,
            establishmentId: establishmentObject.id
        }
        return <button onClick={() => {
            fetch(`http://localhost:8088/favoriteEstablishments`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(favToSendToAPI)
            })
                .then(() => {
                    Navigate('/favorite/locations')
                })
        }} className={"ticket__post"}>Favorite</button>
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
                SetFavorite()
            }

        </CardBody>
    </Card>
}

