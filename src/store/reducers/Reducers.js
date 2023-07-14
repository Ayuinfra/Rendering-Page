import { INCREMENT ,DECREMENT,INCREMENT_BY_2,DECREMENT_BY_2} from "../../store/actions/Actions";
 
  
  const initialState = {
    count: 0,
  };
  
  const counterReducer = (state = initialState, action) => {
    switch (action.type) {
      case INCREMENT:
        return {
          ...state,
          count: state.count + 1,
        };
      case DECREMENT:
        return {
          ...state,
          count: state.count - 1,
        };
      case INCREMENT_BY_2:
        return {
          ...state,
          count: state.count + 2,
        };
      case DECREMENT_BY_2:
        return {
          ...state,
          count: state.count - 2,
        };
      default:
        return state;
    }
  };
  
  export default counterReducer;