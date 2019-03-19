// Action creators

export const codeClick = () => { 
    return { type: 'CODE_CLICK'};
};

export const buyWorkerClick = (workerType) => { 
    return { type: 'BUY_WORKER', payload : workerType};
};

export const buyBoosterClick = (boosterType) => { 
    return { type: 'BUY_BOOSTER', payload : boosterType};
}; 

export const tickEvent = () => { 
    return { type: 'TICK_EVENT'};
}; 
