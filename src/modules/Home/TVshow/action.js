import axios from "axios";

const TvShowApiCall=(dispatch)=>{

    axios.get('https://api.themoviedb.org/3/tv/popular?api_key=afc5f8fe85b8803c153f601fda8cb046')
        .then((response)=>{
            // console.log(response.data.results)
             let arr=[...response.data.results]
            console.log(arr)
             dispatch({type:"ADD_TV",payload:arr})
        })
    axios.get('https://api.themoviedb.org/3/tv/top_rated?api_key=afc5f8fe85b8803c153f601fda8cb046')
        .then((response)=>{
            // console.log(response.data.results)
             let arr=[...response.data.results]
            console.log(arr)
             dispatch({type:"ADD_TOP_RATED",payload:arr})
        })
    
}

export default TvShowApiCall;