import axios from "axios";

export default {
  fetchBulletins(context) {
    const baseURL = process.env.VUE_APP_WOMBATS_API_URI + "/test_urls-management/test_urls";
    axios
      .get(baseURL)
      .then(response => {
        context.commit("setBulletinsData", response.data);
      })
      .catch(e => {
        console.log(e);
      });
  },
};


