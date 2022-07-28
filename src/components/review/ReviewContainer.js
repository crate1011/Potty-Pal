import { useState } from "react"
import { useParams } from "react-router-dom"
import { Review } from "./Review"
import { ReviewForm } from "./ReviewForm"
import { ReviewList } from "./ReviewList"

//parent container to allow the children to have access to the same data
export const ReviewContainer = () => {
    const [posts, setPosts] = useState([])
    const { establishmentId } = useParams()

    const getPosts = () => {
        fetch(`http://localhost:8088/posts?_expand=user&establishmentId=${establishmentId}`)
            .then(response => response.json())
            .then((postsArray) => {
                setPosts(postsArray)
            })
    }

    return <>
        <ReviewForm getPosts={getPosts} />
        <ReviewList posts={posts} getPosts={getPosts} />
    </>
}