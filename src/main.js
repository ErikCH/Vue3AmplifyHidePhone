import { createApp } from "vue";
import App from "./App.vue";
import Amplify from "aws-amplify";
import {
  applyPolyfills,
  defineCustomElements,
} from "@aws-amplify/ui-components/loader";

Amplify.configure({});
applyPolyfills().then(() => {
  defineCustomElements(window);
});

createApp(App).mount("#app");
