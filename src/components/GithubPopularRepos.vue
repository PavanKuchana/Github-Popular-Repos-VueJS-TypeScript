<template>  
     <div class="app-container">
        <div class="responsive-container">
          <h1 class="heading">Popular</h1>
          <div class="filters-list">
            <ul  v-for="each in languageFiltersData" :key="each.id">
            <LanguageFilterItem
            :languageFilterDetails="each"
             :isActive="isActive"
              @onClickLanguageFilter="onClickLanguageFilter"
          />
          </ul>
          </div>
             <div v-if="loadingStatus">
                <div class="spinner"></div>
             </div>
                <div v-else class="repositories-list">
                  <ul v-for="each in popularReposData" :key="each.id">
                   <RepositoryItem
                    :repositoryDetails="each"
                   />
                   </ul>
               </div>
               
              </div>
          </div>
          <div v-show="failureStatus">
             <div className="failure-view-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
              alt="failure view"
              className="failure-view-image"
            />
            <h1 className="error-message">Something Went Wrong</h1>
          </div>
          </div>
</template>


<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import LanguageFilterItem from './LanguageFilterItem.vue'
import RepositoryItem from './RepositoryItem.vue'
import store from '@/store'
import LanguageData from '@/types/LanguageData'
import OrderLanguage from '@/types/OrderLanguage'

export default defineComponent({
    name:'GithubPopularRepos',
    components:{
        LanguageFilterItem,
        RepositoryItem
    },
     setup() {
        const isActive=ref<string>('ALL')
        
        const languageFiltersData =ref<LanguageData[]>([
            {id: 'ALL', language: 'All'},
            {id: 'JAVASCRIPT', language: 'Javascript'},
            {id: 'RUBY', language: 'Ruby'},
            {id: 'JAVA', language: 'Java'},
            {id: 'CSS', language: 'CSS'},
        ])       

        const onClickLanguageFilter=(term:OrderLanguage)=>{
            isActive.value= term
            store.dispatch('fetchRepos',term)
        }        
        const popularReposData=computed(()=>store.getters.repositoriesData)

         const loadingStatus=computed(()=>store.getters.loadingStatus)

         const failureStatus=computed(()=>store.getters.failureStatus)

        const fetchRepos=()=>{
                store.dispatch('fetchRepos')
        }

        return {languageFiltersData,failureStatus,loadingStatus,
                fetchRepos,popularReposData,onClickLanguageFilter,isActive}
    },
    
    created(){
        
        this.fetchRepos()
    }

    
})
</script>

<style scoped>
.app-container {
  display: flex;
  justify-content: center;
  background-color: #ffffff;
  min-height: 100vh;
}

.responsive-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
}

.heading {
  color: #0f172a;
  font-family: 'Lobster';
  font-size: 48px;
  margin-bottom: 48px;
}

.filters-list {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0px;
}

.repositories-list {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0px;
  max-width: 1140px;
}

.failure-view-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -300px;
}

.failure-view-image {
  width: 250px;
  height: 180px;
}

@media screen and (min-width: 768px) {
  .error-view-image {
    width: 527px;
    height: 393px;
  }
  .failure-view-container {
  margin-top: -450px;
}

}

.error-message {
  text-align: center;
  color: #334155;
  font-family: 'Bree Serif';
  font-size: 28px;
}

@media screen and (min-width: 768px) {
  .error-message {
    font-size: 48px;
  }
}

  .spinner {
    width: 40px;
    height: 40px;
    background-color: #333;
    margin: 100px auto;
    -webkit-animation: sk-rotateplane 1.2s infinite ease-in-out;
    animation: sk-rotateplane 1.2s infinite ease-in-out;
  }
  @-webkit-keyframes sk-rotateplane {
    0% {
      -webkit-transform: perspective(120px)
    }
    50% {
      -webkit-transform: perspective(120px) rotateY(180deg)
    }
    100% {
      -webkit-transform: perspective(120px) rotateY(180deg) rotateX(180deg)
    }
  }
  @keyframes sk-rotateplane {
    0% {
      transform: perspective(120px) rotateX(0deg) rotateY(0deg);
      -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg)
    }
    50% {
      transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
      -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg)
    }
    100% {
      transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
      -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
    }
  }
</style>