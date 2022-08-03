import { Link, Navigate } from "react-router-dom"
import { Card, CardBody, CardSubtitle, CardText, CardTitle } from "reactstrap"


//creates an establishment card for each estab in api using deconstruction,
export const NewEstablishment = ({ id, name, address, description, img, areaId, getRequest }) => {

    const localPottyUser = localStorage.getItem("potty_user")
    const pottyUserObject = JSON.parse(localPottyUser)


    const createNewEst = (requestId) => {
        const favToSendToAPI = {
           name,
           address,
           description,
           areaId,
           img
        }
        return <button onClick={() => {
            fetch(`http://localhost:8088/establishments`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(favToSendToAPI)
            })
                .then(() => {
                    fetch(`http://localhost:8088/establishmentRequests/${requestId}`, {
                method: "DELETE",
            })
                })
                .then(getRequest)
        }} className={"ticket__post"}>Approve New Establishment</button>
    }

    const deleteRequest = (requestId) => {
            return <button onClick={() => {
                fetch(`http://localhost:8088/establishmentRequests/${requestId}`, {
                    method: "DELETE",
                })
                .then(getRequest)
            }} className={"ticket__delete"}>decline request</button>
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
                createNewEst(id)
            }
            {
                deleteRequest(id)
            }
        </CardBody>
    </Card>
}

