import { matchPath } from "react-router-dom";
import routeConfig from "./RouteConfigMain.json";

const testFn = () => {
  console.log("Hello World");
};

const testObj = {
  key1: "value1",
  key2: "value2",
};

const saveUserInfo = (data) => {
  localStorage.setItem("data", JSON.stringify(data));
};

const clearUserInfo = () => {
  localStorage.removeItem("data");
};

const isLoggedIn = () => {
  try {
    const log = JSON.parse(localStorage.getItem("data"));
    return !!log;
  } catch {
    return false;
  }
};

const getRolesForPath = (pathname) => {
  // iterate all entries and return roles only when a match is found
  for (const [path, obj] of Object.entries(routeConfig)) {
    console.log("checking path", path, "against", pathname);
    // matchPath returns a match object when it matches
    if (matchPath(path, pathname)) {
      return obj.roles;
    }
  }
  return null; // no match found
};

const getRoles = () => {
  try {
    const val = JSON.parse(localStorage.getItem("data")) || {};
    const r = val.role || [];
    return Array.isArray(r) ? r : [r];
  } catch {
    return [];
  }
};

const isRouteRoleMatches = (roles) => {
  if (!roles) return true; // no roles required => allowed
  const userRoles = getRoles();
  return roles.some((role) => userRoles.includes(role));
};

const isPathAllowed = (pathname) => {
  const roles = getRolesForPath(pathname);
  return isRouteRoleMatches(roles);
};

export {
  testFn,
  saveUserInfo,
  clearUserInfo,
  isLoggedIn,
  isPathAllowed,
  getRolesForPath,
  getRoles,
};

export default testObj;
