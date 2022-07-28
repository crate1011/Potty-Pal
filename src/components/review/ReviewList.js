import { useEffect, useState } from "react"
import { Review } from "./Review"

//create a function that fetches my post data from my api and deconstructs it so that im able to use it in my review component
export const ReviewList = ({ posts, getPosts }) => {

    const [accessability, setAccessibilities] = useState([])

    const localPottyUser = localStorage.getItem("potty_user")
    const pottyUserObject = JSON.parse(localPottyUser)

    useEffect(
        () => {
            fetch(`http://localhost:8088/accessibilityPosts?_expand=accessibility`)
                .then(response => response.json())
                .then((accessabilityArray) => {
                    setAccessibilities(accessabilityArray)
                })
                .then(getPosts)
        },

        []
    )

    return <>
        <h2 className="recent">Recent Reviews</h2>

        <article className="reviews">
            {
                posts.map(post => <Review key={`post--${post.id}`}
                    id={post.id}
                    review={post.review}
                    currentUser={post.userId}
                    postObject={post}
                    getPosts={getPosts}
                    userName={post.user.fullName}
                />)
            }
        </article>

    </>
}