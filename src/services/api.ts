import axios from "axios";

// Set base URL for axios
const api = axios.create({
  baseURL: "https://dummyjson.com",
  headers: {
    "Content-Type": "application/json",
  },
});

// Function to set the authentication token
export const setAuthToken = (token: string | null) => {
  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common["Authorization"];
  }
};

// Login function
export const login = async (username: string, password: string) => {
  const response = await api.post("/user/login", { username, password });
  return response.data;
};

// Get current authenticated user
export const getCurrentUser = async () => {
  const response = await api.get("/user/me");
  return response.data;
};

// Get all users
export const getUsers = async (page: number) => {
  const response = await api.get(`/users?page=${page}&limit=10`);
  return response.data.users;
};

// Get a single user by ID
export const getUserById = async (id: string) => {
  const response = await api.get(`/users/${id}`);
  return response.data;
};

export default api;
