export default {
  isDay(context) {
    context.commit("setTheme", "day");
  },
  isNight(context) {
    context.commit("setTheme", "night");
  },
};


