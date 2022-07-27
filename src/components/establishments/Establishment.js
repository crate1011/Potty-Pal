import { Link } from "react-router-dom"
import "./establishments.css"

export const Establishment = ({ id, name, address }) => {
    return <section className="establishment">
        <div>
            <Link className="theLink" to={`/establishment/${id}`}> {name}</Link>
        </div>
        <div className="theAdd" >{address}</div>

        
    </section>
}

