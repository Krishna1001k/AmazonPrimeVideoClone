import axios from "axios";


const FirstApiCall=()=>{

    return(dispatch)=>{
        
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=afc5f8fe85b8803c153f601fda8cb046')
        .then((response)=>{
            // console.log(response.data.results)
             let arr=[...response.data.results]
            // console.log(arr)
             dispatch({type:"ADD_TOP_MOVIES",payload:arr})
        })
        axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=afc5f8fe85b8803c153f601fda8cb046')
        .then((response)=>{
            // console.log(response.data)
             let arr=[...response.data.results]
            // console.log(arr)
             dispatch({type:"TRENDING_MOVIES",payload:arr})
        })
        axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=afc5f8fe85b8803c153f601fda8cb046')
        .then((response)=>{
            // console.log(response.data)
             let arr=[...response.data.results]
            // console.log(arr)
             dispatch({type:"UPCOMING_MOVIES",payload:arr})
        })
    }


}

export default FirstApiCall;