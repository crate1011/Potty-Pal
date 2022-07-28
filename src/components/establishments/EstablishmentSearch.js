import "./establishments.css"

export const EstablishmentSearch = ({ setterFunction }) => {

    return ( 
    <div className="find">
       <h2>Find An Establishment And Review A Bathroom</h2>
        
         
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