const API_URL = "http://localhost:8000/api/";

async function login(email, password) {
  return fetch(API_URL + "auth/login/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(email, password),
  }).then((response) => {
    if (response.data.accessToken) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }

    return response.data;
  });
}

async function register(name, email, password) {
  return fetch(API_URL + "auth/register/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(name, email, password),
  });
}

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  login,
  register,
  logout,
};
