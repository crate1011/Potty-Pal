import { Link } from "react-router-dom"
import "./establishments.css"

export const Establishment = ({id, name, address}) => {
    return <section className="establishment">
            <div>
                <Link to={`/establishment/${id}`}> {name}</Link>
            </div>
            <div>{address}</div>
        </section>
}