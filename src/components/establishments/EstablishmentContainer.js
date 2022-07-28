import { useState } from "react"
import { EstablishmentList } from "./EstablishmentList"
import { EstablishmentSearch } from "./EstablishmentSearch"

//this contaner 

export const EstablishmentContainer = () => {
    const [searchTerms, setSearchTerms] = useState("")

    return <>
        <EstablishmentSearch setterFunction={setSearchTerms} />
        <EstablishmentList searchTermState={searchTerms} />
    </>
}