<template>
    <li class="repository-item">
      <img class="repository-image" :src="repositoryDetails.avatar_url" :alt="repositoryDetails.name" />
      <h1 class="repository-name">{{repositoryDetails.name}}</h1>
      <div class="stats-container">
        <img
          class="stats-icon"
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt="stars"
        />
        <p class="stats-text">{{repositoryDetails.stars_count}} stars</p>
      </div>
      <div class="stats-container">
        <img
          class="stats-icon"
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt="forks"
        />
        <p class="stats-text">{{repositoryDetails.forks_count}} forks</p>
      </div>
      <div class="stats-container">
        <img
          class="stats-icon"
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="open issues"
        />
        <p class="stats-text">{{repositoryDetails.issues_count}} open issues</p>
      </div>
    </li>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import ReposData from '@/types/ReposData'

export default defineComponent({
    name:'RepositoryItem',
    props:{
        repositoryDetails:{
            type : Object as PropType<ReposData>,
            required:true
        }
    }
})
</script>


<style scoped>
.repository-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: 100%;
  background-color: #f8f8ff;
  border-radius: 24px;
  height: 300px;
  margin-bottom: 24px;
  padding: 24px;
}

@media (min-width: 576px) {
  .repository-item {
    flex-basis: 45%;
    margin-left: 16px;
  }
}

@media (min-width: 992px) {
  .repository-item {
    flex-basis: 30%;
  }
}

@media (min-width: 1200px) {
  .repository-item {
    flex-basis: 23%;
  }
}

.repository-image {
  width: 92px;
  height: 92px;
}

.repository-name {
  color: #e73959;
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 500;
}

.stats-container {
  display: flex;
  align-items: center;
  width: 85%;
  margin-bottom: 16px;
}

.stats-icon {
  width: 16px;
  height: 16px;
  margin-right: 12px;
}

.stats-text {
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 16px;
  margin: 0px;
}
</style>