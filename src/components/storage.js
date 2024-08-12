const key = "n-token";

export function getToken() {
  return JSON.parse(localStorage.getItem(key));
}

export function storeToken(token) {
  localStorage.setItem(key, JSON.stringify(token));
}
