import { useState } from "react"
import { EstablishmentList } from "./EstablishmentList"
import { EstablishmentSearch } from "./EstablishmentSearch"

export const EstablishmentContainer = () => {
    const [searchTerms, setSearchTerms] = useState("")

    return <>
        <EstablishmentSearch setterFunction={setSearchTerms} />
        <EstablishmentList searchTermState={searchTerms} />
    </>
}