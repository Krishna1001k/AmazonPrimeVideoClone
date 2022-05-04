const initialData={
    topMovies:[],
    trendingMovies:[],
    upcomingMovies:[],
}

const tabHomeReducer=(state=initialData,action)=>{
    const {type,payload}=action;

    switch (type) {
        case "ADD_TOP_MOVIES":
            return{...state,...{topMovies:[...payload]}}
        
        case "TRENDING_MOVIES":
            return{...state,...{trendingMovies:[...payload]}}
        
        case "UPCOMING_MOVIES":
            return{...state,...{upcomingMovies:[...payload]}}
        
        default:
            return{...state}
    }
    
}

export default tabHomeReducer;