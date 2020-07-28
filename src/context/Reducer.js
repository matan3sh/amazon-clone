export const initialState = {
  basket: [],
  user: null
};

export function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, action.payload]
      };
    case 'REMOVE_FROM_BASKET':
      break;
    default:
      return state;
  }
}
