import { createStore } from "vuex";
// import bulletinsModule from "./modules/bulletins"
import theme from "@/store/modules/theme";
import isLoadingModule from "./modules/is_loading"

const store = createStore({
  modules: {
    // bulletins: bulletinsModule,
    theme: theme,
    isLoading: isLoadingModule
}
});

export default store;
