import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


export const UserDetails = () => {

    const { userId } = useParams()
    const [user, updateUser] = useState()

    useEffect(
        () => {
            fetch(`http://localhost:8088/users=${userId}`)
            .then(response => response.json())
            .then((data) => {
                const singleUser = data[0]
                updateUser(singleUser)
            })
        },
        [userId]
    )

    return <section className="user">
    <header className="user__header">{user.fullName}</header>
    <div>Email: {user.email}</div>
    <div>Address: {user.address}</div>
</section>
}