import { useContext } from "react"
import { WorkoutsContext } from "../contexts/WorkoutContext"

// FOR use this CONTEXT in ANY Components MUST import (involk) this Hook context

export const useWorkoutsContext = () => {
    const context = useContext(WorkoutsContext)

    if (!context) {
        throw Error('useWorkoutsContext must be used inside an WorkoutsContextProvider')
    }

    return context
}