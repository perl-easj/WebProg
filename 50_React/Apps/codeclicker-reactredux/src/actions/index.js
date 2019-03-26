// Action creators

export const codeClick = () => { 
    return { type: 'CODE_CLICK'};
};

export const buyWorkerClick = (id) => { 
    return { type: 'BUY_WORKER', payload : id};
};

export const buyBoosterClick = (id) => { 
    return { type: 'BUY_BOOSTER', payload : id};
}; 

export const tickEvent = () => { 
    return { type: 'TICK_EVENT'};
}; 
