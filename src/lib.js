import { matchPath } from "react-router-dom";

export function matchRoute() {
  return matchPath("/some-path");
}

export function getRoute() {
  return "/some-path";
}
