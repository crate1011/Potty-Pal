import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Review } from "./Review"


export const ReviewList = () => {

    const { establishmentId } = useParams()

    const [posts, setPosts] = useState([])
    const [accessability, setAccessibilities] = useState([])

    const localPottyUser = localStorage.getItem("potty_user")
    const pottyUserObject = JSON.parse(localPottyUser)

    useEffect(
        () => {
            fetch(`http://localhost:8088/posts?establishmentId=${establishmentId}`)
                .then(response => response.json())
                .then((postsArray) => {
                    setPosts(postsArray)
                })
        },

        []
    )

    useEffect(
        () => {
            fetch(`http://localhost:8088/accessibilityPosts?_expand=accessibility`)
                .then(response => response.json())
                .then((accessabilityArray) => {
                    setAccessibilities(accessabilityArray)
                })
        },

        []
    )

    return <>
    <h2>Recent Reviews</h2>

        <article className="reviews">
            {
                posts.map(post => <Review key={`post--${post.id}`}
                id={post.id}
                review={post.review}
                currentUser={post.userId}
            />)
            }




        </article>

    </>
}