import { useEffect, useState } from "react"
import { Review } from "./Review"


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
        },

        []
    )

    return <>
        


        <article className="reviews">
            
            <h2 className="recent">Recent Reviews</h2>
            {
                posts.map(post => <Review key={`post--${post.id}`}
                    id={post.id}
                    review={post.review}
                    currentUser={post.userId}
                    postObject={post}
                    getPosts={getPosts}
                />)
            }




        </article>

    </>
}