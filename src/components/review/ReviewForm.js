import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import "./review.css"

export const ReviewForm = () => {
    const { establishmentId } = useParams()
    const [accessibilities, setAccessibilities] = useState([])
    const [establishment, updateEstablishment] = useState([])

    useEffect(
        () => {
            fetch(`http://localhost:8088/accessibilities`)
                .then(response => response.json())
                .then((accessibilitiesArray) => {
                    setAccessibilities(accessibilitiesArray)
                })
        },

        []
    )

    useEffect(
        () => {
            fetch(`http://localhost:8088/establishments?id=${establishmentId}`)
            .then(response => response.json())
            .then((data) => {
                const singleEst = data[0]
                updateEstablishment(singleEst)
            })
        },
        [establishmentId]
    )

    return <>

        <h2>{establishment?.name}</h2>
        <textarea id="textBox" name="letterText" rows={20} cols={100} />
        <article className="accessibilities">
            {
                accessibilities.map(
                    (accessibilitie) => {
                        return <section className="accessibilitie" key={`accessibilitie--${accessibilitie.id}`}>{accessibilitie.name}
                            <input type="checkbox" id="accessibilities" name="accessibilitie" value={accessibilitie.id} />
                        </section>
                    }
                )
            }
        </article>

        <button>Post Review</button>
    </>
}