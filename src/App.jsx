import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { GoogleOAuthProvider } from "@react-oauth/google"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import { isAuthenticated } from "./utils/auth"

// Protected route component
const ProtectedRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/" />
}

function App() {
  return (
    <GoogleOAuthProvider clientId="236145537195-si0q353gbg5c08s0dfvfbssssug7ivhk.apps.googleusercontent.com">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  )
}

export default App
