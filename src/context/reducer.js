export const initialState = [];

export const reducer = (state=initialState, action) => {
  switch (action.type) {
    case "ADD":
      return [...state.filter(produc=>produc.id !== action.payload.id), action.payload];
    case "REMOVE":
      const newArr = [...state.filter(produc=>produc.id!== action.payload)];
      return newArr;

    default:
      break;
  }
};
