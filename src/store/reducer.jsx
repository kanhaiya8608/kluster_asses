export const initialState = {
  total: 0,
  products: [],
};

export const StoreReducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return {
        ...state,
        products: action.payload,
      };
    case 'remove':
      return {
        ...state,
        products: action.payload,
      };
    case 'removeAll':
      return {
        ...state,
        products: [],
        total: 0,
      };
    case 'update price':
      return {
        ...state,
        total: action.payload,
      };
    case 'update count':
      return {
        ...state,
        products: action.payload,
      };
    default:
      throw new Error('Cannot match case in reducer');
  }
};
export default StoreReducer;