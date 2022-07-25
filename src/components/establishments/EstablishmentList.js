import { useEffect, useState } from "react"
import { Link, Navigate } from "react-router-dom"
import { AreaDropdown } from "../areas/AreaSelect"
import "./establishments.css"


export const EstablishmentList = () => {

    const [establishments, setEstablishments] = useState([])
    const [selectedArea, setSelectedArea] = useState(null)

    useEffect(
        () => {
            fetch(`http://localhost:8088/establishments?_expand=area&areaId=${selectedArea}`)
            .then(response => response.json())
            .then((establishmentsArray) => {
               setEstablishments(establishmentsArray)
            })
        },

        [selectedArea]
    )

    return <>
        <AreaDropdown setSelectedArea={setSelectedArea}/>

        <article className="establishments">
            {
                establishments.map(
                    (establishment) => {
                        return <section className="establishment" key={`establishment--${establishment.id}`}>
                            <Link color="orange" className="navbar__link" to="create/review">{establishment.name}</Link>
                            <footer>{establishment.address}</footer> 
                            <button color="succss" className="button">favorite</button>
                        </section>
                    }
                )
            }




        </article>
    </>

}
