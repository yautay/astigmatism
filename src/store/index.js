import { createStore } from "vuex";
import bulletinsModule from "./modules/bulletins"
import homeLoadingModule from "./modules/home_loading"

const store = createStore({
  modules: {
    bulletins: bulletinsModule,
    homeLoading: homeLoadingModule
}
});

export default store;
