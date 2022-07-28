import { useEffect, useState } from "react"
import "./area.css"

export const AreaDropdown = ({ setSelectedArea }) => {
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

    return (

        <fieldset>
            <div className="drop__area">
                <Dropdown
                    options={areas}
                    value={areas.id}
                    onChange={e => setSelectedArea(e.target.value)}>
                </Dropdown>

            </div>
        </fieldset>
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
