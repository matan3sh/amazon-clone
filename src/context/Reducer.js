export const initialState = {
  basket: [],
  user: null
};

export function reducer(state, action) {
  switch (action.type) {
    case 'LOAD_BASKET':
      return {
        ...state,
        basket: action.payload
      };
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, action.payload]
      };
    case 'REMOVE_FROM_BASKET':
      return {
        ...state,
        basket: action.payload
      };
    case 'SET_USER':
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
}
