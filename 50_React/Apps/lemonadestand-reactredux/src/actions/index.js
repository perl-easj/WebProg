// Action creators
// These will be used by the UI component, since it 
// is the UI component which invokes actions.

export const sellLemonade = (noOfGlasses) => {
    return {
        type: 'SELL_LEMONADE',
        payload: noOfGlasses
    };
};

export const buyLemons = (noOfLemons) => {
    return {
        type: 'BUY_LEMONS',
        payload: noOfLemons
    };
};