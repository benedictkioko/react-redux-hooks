//  method for retrieving data from server

export default function authHeader() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.accessToken) {
    return { Authorization: "Token " + user.accessToken };
  } else {
    return {};
  }
}
