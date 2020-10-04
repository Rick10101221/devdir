let initState = {
  search: [],
  results: [],
}

const navReducer = (state = initState, action) => {
  switch(action.type){
    case 'SEARCH':
      return {
        ...state,
        search: action.payload
      }

    case 'RESULT':
      return {
        ...state,
        results: action.payload
      }

    case 'REJECT':
      let newRes = state.results;
      newRes.shift();
      return {
        ...state,
        results: newRes
      }

    case 'ACCEPT':
      return {
        ...state,
        chatting: false
      }

    default:
      return state    
  }
}

export default navReducer;