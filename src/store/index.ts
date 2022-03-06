import { createStore } from "vuex";
import repos from './modules/repos';

export default createStore({
  modules: {
    repos
  }
});