import {createApp} from "vue";
import router from "@/router";
import App from "@/App";
import store from "./store";

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEye, faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
library.add(faEye, faSun, faMoon)

const app = createApp(App);
app.use(router);
app.use(store);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount("#app")
