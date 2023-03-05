import mutations from "@/store/modules/is_loading/mutations.js";
import actions from "@/store/modules/is_loading/actions.js";
import getters from "@/store/modules/is_loading/getters.js"

export default {
  namespaced: true,
  state() {
    return {
      isLoading: false
    }
  },
  mutations,
  actions,
  getters
}