"use client"

import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { GoogleLogin } from "@react-oauth/google"
import { jwtDecode } from "jwt-decode"
import { googleLogin } from "../api"
import { setUserData, isAuthenticated } from "../utils/auth"

const Login = () => {
  const navigate = useNavigate()

  useEffect(() => {
    // Redirect if already logged in
    if (isAuthenticated()) {
      navigate("/dashboard")
    }
  }, [navigate])

  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      // Get the ID token from the response
      const { credential } = credentialResponse

      // For debugging - you can see the decoded token info
      console.log(jwtDecode(credential))

      // Send the token to your backend
      const userData = await googleLogin(credential)

      // Save user data and token
      setUserData(userData)

      // Redirect to dashboard
      navigate("/dashboard")
    } catch (error) {
      console.error("Login failed:", error)
      alert("Login failed. Please try again.")
    }
  }

  const handleGoogleFailure = () => {
    console.error("Google login failed")
    alert("Google login failed. Please try again.")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
          <p className="mt-2 text-center text-sm text-gray-600">Use your Google account to sign in</p>
        </div>
        <div className="mt-8 space-y-6 flex flex-col items-center">
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={handleGoogleFailure}
            useOneTap
            theme="filled_blue"
            shape="pill"
            text="signin_with"
            size="large"
          />
        </div>
      </div>
    </div>
  )
}

export default Login
