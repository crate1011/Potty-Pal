import "./establishments.css"

export const EstablishmentSearch = ({ setterFunction }) => {

    return (
        <div className="searchBar">
            <input 
                onChange={
                    (changeEvent) => {
                        setterFunction(changeEvent.target.value)
                    }
                }
                type="text"  placeholder="Enter an establishment" />
        </div>
    )

}