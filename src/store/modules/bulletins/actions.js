import axios from "axios";

export default {
  fetchBulletins(context) {
    const baseURL = "https://localhost:3000/test_urls-management/test_urls";
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


