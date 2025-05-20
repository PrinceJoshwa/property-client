// Save user data to localStorage
export const setUserData = (userData) => {
  localStorage.setItem("user", JSON.stringify(userData))
  localStorage.setItem("token", userData.token)
}

// Get user data from localStorage
export const getUserData = () => {
  const user = localStorage.getItem("user")
  return user ? JSON.parse(user) : null
}

// Remove user data from localStorage
export const removeUserData = () => {
  localStorage.removeItem("user")
  localStorage.removeItem("token")
}

// Check if user is authenticated
export const isAuthenticated = () => {
  return !!localStorage.getItem("token")
}
