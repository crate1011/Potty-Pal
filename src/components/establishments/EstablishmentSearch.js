

export const EstablishmentSearch = ({ setterFunction }) => {

    return (
        <div>
            <input
                onChange={
                    (changeEvent) => {
                        setterFunction(changeEvent.target.value)
                    }
                }
                type="text" placeholder="Enter an establishment" />
        </div>
    )

}