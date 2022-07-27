

export const Review = ({ review, currentUser, getPosts, postObject }) => {

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

    return <section className="review__box">
        <div>
            <div>User: {currentUser}</div>
            <section> Review: {review}</section>
        </div>
        {
            deleteButton()
        }
    </section>
}