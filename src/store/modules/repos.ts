import axios from 'axios'
import OrderLanguage from "@/types/OrderLanguage"
import ReposData from "@/types/ReposData"


type State={
    popularReposData : ReposData[]
    loadingStatus:boolean
    failureStatus:boolean
}

const state:State={
    popularReposData: [],
    loadingStatus:false,
    failureStatus:false
}

const getters={
    repositoriesData : (state:State) => state.popularReposData,
    loadingStatus:(state:State)=>state.loadingStatus,
    failureStatus:(state:State)=>state.failureStatus
}

const actions ={
    async fetchRepos({commit}:any,term:OrderLanguage){
        try{
        commit('loadingStatus',true)
        const response=await axios.get(`https://apis.ccbp.in/popular-repos?language=${term}`)
        console.log(response)
            commit('setPopularRepos',response.data.popular_repos)
            commit('loadingStatus',false)
       }

        catch(error){
            commit('failureStatus',true)
            commit('loadingStatus',false)
        }
        
    },
}

const mutations={
    setPopularRepos : (state:State,popularReposData:ReposData[]) =>(state.popularReposData =popularReposData),
    loadingStatus:(state:State,newLoadingStatus:boolean)=>{
        state.loadingStatus=newLoadingStatus
    },
    failureStatus:(state:State,newfailureStatus:boolean)=>{
        state.failureStatus = newfailureStatus
    }
    

    
}

export default{
    state,
    getters,
    actions,
    mutations
}