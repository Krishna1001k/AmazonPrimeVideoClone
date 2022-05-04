const initialState={
    popularShow:[],
    topRatedShow:[],
}

const tvShowsReducer=(state=initialState,action)=>{
const {type,payload}=action;
    switch (type) {
        case "ADD_TV":
            return {...state,...{popularShow:[...payload]}}
    
        case "ADD_TOP_RATED":
            return {...state,...{topRatedShow:[...payload]}}
    
        default:
            return state
    }
}

export default tvShowsReducer;