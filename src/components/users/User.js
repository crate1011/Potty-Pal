import { Link } from "react-router-dom"
import { Card, CardBody, CardSubtitle, CardText, CardTitle } from "reactstrap"


export const User = ({id, fullName, email, img, userObject}) => {

    const deleteUser = () => {
            return <button onClick={() => {
                fetch(`http://localhost:8088/users/${userObject.id}`, {
                    method: "DELETE",
                })
            }} className={"ticket__delete"}>delete user</button>
    }

    return<Card className="cards"
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
            <Link className="theLink" to={`/user/${id}`}> {fullName}</Link>
        </CardTitle>
        <CardSubtitle
            className="mb-2 text-muted"
            tag="h6"
        >
            {email}
        </CardSubtitle>
        <CardText>
        
        </CardText>
        {
           deleteUser()
        }
    </CardBody>
</Card>
}