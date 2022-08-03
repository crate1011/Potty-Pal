import { useEffect, useState } from "react"
import { NewEstablishment } from "./NewEstablishment"

//creates a list of establishments and takes searchtermstate as a param
export const NewEstablishmentList = () => {

    const [newEstablishments, setNewEstablishments] = useState([])

    useEffect(
        () => {
            fetch(`http://localhost:8088/establishmentRequests?_expand=area`)
                .then(response => response.json())
                .then((newEstablishmentsArray) => {
                    setNewEstablishments(newEstablishmentsArray)
                })
        },

        []
    )

    const getRequests = () => {
        fetch(`http://localhost:8088/establishmentRequests?_expand=area`)
                .then(response => response.json())
                .then((newArray) => {
                    setNewEstablishments(newArray)
                })
    }


    //return will deconstruct establishment and reference my Establishment container
    return <article className="establishments">
        {
            newEstablishments.map(newEstablishment => <NewEstablishment getRequest={getRequests} key={`establishment--${newEstablishment.id}`}
                id={newEstablishment.id}
                name={newEstablishment.name}
                address={newEstablishment.address}
                newEstablishmentObject={newEstablishment}
                description={newEstablishment.description}
                img={newEstablishment.img}
                areaId={newEstablishment.areaId}
            />)

        }
    </article>
}


