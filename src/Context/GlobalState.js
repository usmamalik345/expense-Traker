import { useContext, useReducer } from "react";

// initail state
const initialState = {
    transaction: [
           { id: 1, text: 'Flower', amount: -20 },
           { id: 2, text: 'Salary', amount: 300 },
           { id: 3, text: 'Book', amount: -10 },
           { id: 4, text: 'Camera', amount: 150 }
        ]
}

// Create COntext

export const GlobalContext = useContext(initialState);

// Provider COmponent

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)
    return(
        <GlobalContext.Provider value={{ 
            transaction: state.transaction
        }}>
            {children}
        </GlobalContext.Provider>
    )
}