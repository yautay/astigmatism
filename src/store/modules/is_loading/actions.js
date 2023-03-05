export default {
  isLoading(context) {
    context.commit("setIsLoading", true);
  },
  isNotLoading(context) {
    context.commit("setIsLoading", false);
  },
};


