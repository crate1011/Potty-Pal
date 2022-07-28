import { useEffect, useState } from "react"
import { AreaDropdown } from "../areas/AreaSelect"
import { Establishment } from "./Establishment"
import "./establishments.css"

//creates a list of establishments and takes searchtermstate as a param
export const EstablishmentList = ({ searchTermState }) => {

    const [establishments, setEstablishments] = useState([])
    const [filterEstablishments, setFilter] = useState([])
    const [selectedArea, setSelectedArea] = useState(null)

    useEffect(
        () => {
            const searchedEstablishments = establishments.filter(establishment => {
                return establishment.name.toLowerCase().startsWith(searchTermState.toLowerCase())
            })
            setFilter(searchedEstablishments)

        },
        [searchTermState]
    )

    useEffect(
        () => {
            fetch(`http://localhost:8088/establishments?_expand=area&areaId=${selectedArea}`)
                .then(response => response.json())
                .then((establishmentsArray) => {
                    setEstablishments(establishmentsArray)
                    setFilter(establishmentsArray)
                })
        },

        [selectedArea]
    )

    //return will deconstruct establishment and reference my Establishment container
    return <article className="establishments">
        <AreaDropdown setSelectedArea={setSelectedArea} />
        {
            filterEstablishments.map(establishment => <Establishment key={`establishment--${establishment.id}`}
                id={establishment.id}
                name={establishment.name}
                address={establishment.address}
                establishmentObject={establishment}
                description={establishment.description}
                img={establishment.img}
            />)

        }
    </article>
}


