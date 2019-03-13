// Action creators
// These will be used by the App component, since it 
// is the App component which invokes actions.

//increment action - no payload
export const increment = () => { 
    return { type: 'INCREMENT'}
}; 

//decrement action - no  payload
export const decrement = () => { 
    return { type: 'DECREMENT'}
}; 