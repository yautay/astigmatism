import mutations from "@/store/modules/theme/mutations";
import actions from "@/store/modules/theme/actions";
import getters from "@/store/modules/theme/getters.js";

export default {
  namespaced: true,
  state() {
    return {
      theme: false
    }

  },
  mutations,
  actions,
  getters
}
