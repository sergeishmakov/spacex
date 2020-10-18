import Vue from "vue";

const requireComponent = require.context(".", false, /_base-[\w-]+\.vue$/);

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName);
  const componentName = fileName
    .replace(/^\.\/_/, "")
    .replace(/\.\w+$/, "")
    .replace(/base-/, "")
    .split("-")
    .map(kebab => kebab.charAt(0).toUpperCase() + kebab.slice(1))
    .join("");
  Vue.component(componentName, componentConfig.default || componentConfig);
});
