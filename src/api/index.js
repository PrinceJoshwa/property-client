import axios from "axios"

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";


// Create axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
})

// Add auth token to requests if available
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token")
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error),
)

// Google login
export const googleLogin = async (tokenId) => {
  try {
    const response = await api.post("/users/google-login", { tokenId })
    return response.data
  } catch (error) {
    throw error.response?.data || { message: "Something went wrong" }
  }
}

// Get user profile
export const getUserProfile = async () => {
  try {
    const response = await api.get("/users/profile")
    return response.data
  } catch (error) {
    throw error.response?.data || { message: "Something went wrong" }
  }
}
