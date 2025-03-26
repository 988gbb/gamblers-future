// plugins/fontawesome.js
import { library } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-free/css/all.css";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faDiceD20,
  faCrown,
  faCircleNotch,
  faUserTie,
  faVideo,
  faFootballBall,
  faGift,
  faBolt,
  faMobileAlt,
  faThLarge,
  faTimes,
  faDice,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

// Add icons to library
library.add(
  faDiceD20,
  faCrown,
  faCircleNotch,
  faUserTie,
  faVideo,
  faFootballBall,
  faGift,
  faBolt,
  faMobileAlt,
  faThLarge,
  faTimes,
  faDice,
  faUser
);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("font-awesome-icon", FontAwesomeIcon);
});
