const storage = localStorage;
const AUTH_TOKEN_KEY = 'authToken';
const CURRENT_USER_KEY = 'currentUser';

export function setAuthToken(token) {
  storage.setItem(AUTH_TOKEN_KEY, token);
}

export function getAuthToken() {
  return storage.getItem(AUTH_TOKEN_KEY);
}

export function clearAuthToken() {
  storage.removeItem(AUTH_TOKEN_KEY);
}

export function setCurrentUser(user) {
  const userObject = JSON.stringify(user);
  storage.setItem(CURRENT_USER_KEY, userObject);
}

export function getCurrentUser() {
  const userObject = storage.getItem(CURRENT_USER_KEY);
  return JSON.parse(userObject);
}

export function clearCurrentUser() {
  storage.removeItem(CURRENT_USER_KEY);
}

export function clearAll() {
  clearCurrentUser();
  clearAuthToken();
}
