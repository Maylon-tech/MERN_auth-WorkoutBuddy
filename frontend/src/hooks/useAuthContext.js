import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"

// FOR use this CONTEXT in ANY Components MUST import (call in) this Hook context

export const useAuthContext = () => {
    const context = useContext(AuthContext)

    if (!context) {
        throw Error('useAuthContext must be used inside an AuthContextProvider')
    }

    return context
}