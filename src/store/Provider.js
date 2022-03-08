import { useReducer } from 'react';
import Context from './Content'
import reducer, { initState } from './reducer';
// import logger from './logger';

function Provider({ children }) {

    const [state, dispatch] = useReducer(reducer, initState)
    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
}

export default Provider;