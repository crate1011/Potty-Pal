import { useState } from "react"
import { EstablishmentList } from "./EstablishmentList"
import { EstablishmentSearch } from "./EstablishmentSearch"

//this will be the parent container of establishment search and establishment list
//this will allow me to pass data between the children components

export const EstablishmentContainer = () => {
    const [searchTerms, setSearchTerms] = useState("")

    return <>
        <EstablishmentSearch setterFunction={setSearchTerms} />
        <EstablishmentList searchTermState={searchTerms} />
    </>
}