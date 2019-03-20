export const postReducer = (state = { Drivers : [] }, action) => {
  switch (action.type) {
    case 'FETCH_F1DATA':
      return action.payload;
    default:
      return state;
  }
};