import { createContext, useReducer } from 'react'

export const WorkoutsContext = createContext()

// Reducer Function - To Dispatch the state and action
export const workoutsReducer = (state, action) => {
    switch (action.type) {
        // Fetch ALL workouts at once
        case 'SET_WORKOUTS':
            return {
                workouts: action.payload
            }
        // create NEW Workout
        case 'CREATE_WORKOUT':
            return {
                workouts: [action.payload, ...state.workouts]
            }
        // delete ONE workout
        case 'DELETE_WORKOUT':
            return {
                workouts: state.workouts.filter((w) => w._id !== action.payload._id)
            }
        default: return state
    }
}

// App Global Wraps here
export const WorkoutsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(workoutsReducer, {
        workouts: null
    })


    return (
        <WorkoutsContext.Provider value={{ state, dispatch}}>
            { children }
        </WorkoutsContext.Provider>
    )



}