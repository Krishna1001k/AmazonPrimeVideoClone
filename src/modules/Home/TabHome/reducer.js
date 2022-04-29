const initialData={
    topMovies:[],
    trendingMovies:[],
}

const tabHomeReducer=(state=initialData,action)=>{
    const {type,payload}=action;

    switch (type) {
        case "ADD_TOP_MOVIES":
            return{...state,...{topMovies:[...payload]}}
        
        case "TRENDING_MOVIES":
            return{...state,...{trendingMovies:[...payload]}}
        
        default:
            return{...state}
    }
    
}

export default tabHomeReducer;