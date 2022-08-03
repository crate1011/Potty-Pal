import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export const EstablishmentRequestForm = () => {

    const [areas, setAreas] = useState([])

    useEffect(
        () => {
            fetch(`http://localhost:8088/areas`)
                .then(response => response.json())
                .then((areasArray) => {
                    setAreas(areasArray)
                })
        },

        []
    )

    const [establishment, update] = useState({
        name: "",
        address: "",
        areaId: "",
        description: "",
        img: ""
    })
    /*
        TODO: Use the useNavigation() hook so you can redirect
        the user to the ticket list
    */
   const navigate = useNavigate()

   const localPottyUser = localStorage.getItem("potty_user")
   const pottyUserObject = JSON.parse(localPottyUser)

    const handleSaveButtonClick = (event) => {
        event.preventDefault()

    const ticketToSendToAPI = {
       name: establishment.name,
       address: establishment.address,
       areaId: establishment.areaId,
       description: establishment.description,
       img: establishment.img
    }

        // TODO: Perform the fetch() to POST the object to the API
        return fetch(`http://localhost:8088/establishmentRequests`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(ticketToSendToAPI)
        })
        .then(response => response.json())
        .then(() => {
            navigate("/")

        })
    }

    return (
        <form className="establishmentCreateForm">
            <h2 className="EstablishmentForm__title">Create Establishment Request</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Enter An Establishments Name"
                        value={establishment.name}
                        onChange={
                            (evt) => {
                                const copy = {...establishment}
                                copy.name = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="address">Address:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Enter An Establishments Address"
                        value={establishment.address}
                        onChange={
                            (evt) => {
                                const copy = {...establishment}
                                copy.address = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
            <div className="create__area">
                <Dropdown
                    options={areas}
                    value={establishment.areaId}
                    onChange={
                        (evt) => {
                            const copy = { ...establishment }
                            copy.areaId = parseInt(evt.target.value)
                            update(copy)
                        }
                    }>
                </Dropdown>

            </div>
        </fieldset>
        <fieldset>
                <div className="form-group">
                    <label htmlFor="address">Description:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Enter An Establishments Description"
                        value={establishment.description}
                        onChange={
                            (evt) => {
                                const copy = {...establishment}
                                copy.description = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="address">Image:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Add An Image URL"
                        value={establishment.img}
                        onChange={
                            (evt) => {
                                const copy = {...establishment}
                                copy.img = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            
            <button
            onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
            
            className="btn btn-primary">
                Submit Request
            </button>
        </form>
    )
}

const Dropdown = ({ label, options, onChange }) => {

    return (
        <label className="the__drop">
            {label}
            <select onChange={(event) => { onChange(event) }}>
                <option value={0}>select an area</option>
                {options.map((option) => (
                    <option key={option.id} value={option.id}>{option.name}</option>
                ))}

            </select>
        </label>
    );
};