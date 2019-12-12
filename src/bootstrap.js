import * as singleSpa from "single-spa";

singleSpa.registerApplication(
  "reactApp",
  () => import("@xudaosong/react-app"),
  pathPrefix("/reactApp")
);

singleSpa.start();

function pathPrefix(prefix) {
  return function(location) {
    return location.pathname.startsWith(`${prefix}`);
  };
}
