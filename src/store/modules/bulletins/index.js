import mutations from "@/store/modules/bulletins/mutations.js";
import actions from "@/store/modules/bulletins/actions.js";
import getters from "@/store/modules/bulletins/getters.js"

export default {
  namespaced: true,
  state() {
    return {
      bulletins: []
    }

  },
  mutations,
  actions,
  getters
}
