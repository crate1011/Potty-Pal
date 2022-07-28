import { Button, Offcanvas } from "bootstrap"
import { Card, CardBody, CardSubtitle, CardText, CardTitle, OffcanvasBody, OffcanvasHeader } from "reactstrap"

//creates a review card for each review in my database
export const Review = ({ review, currentUser, getPosts, postObject, userName }) => {

    const localPottyUser = localStorage.getItem("potty_user")
    const pottyUserObject = JSON.parse(localPottyUser)

    const deleteButton = () => {
        if (currentUser === pottyUserObject.id) {
            return <button onClick={() => {
                fetch(`http://localhost:8088/posts/${postObject.id}`, {
                    method: "DELETE",
                })
                    .then(getPosts)
            }} className={"ticket__delete"}>delete</button>
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
        <CardBody>
            <CardTitle tag="h5">
                User: {userName}
            </CardTitle>
            <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
            >
            </CardSubtitle>
            <CardText>
                {review}
            </CardText>
            {
                deleteButton()
            }
        </CardBody>
    </Card>
}


