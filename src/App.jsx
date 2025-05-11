import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Template1 from './components/Template1';
import MyResumes from './pages/MyResumes';

const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID || '352112236-q2che8r2qdoscgovbi09vkc7oglgkj8a.apps.googleusercontent.com';

function App() {
  return (
   <GoogleOAuthProvider clientId={googleClientId}>
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/template1" element={<Template1 />} />
        <Route path="/myresume" element={<MyResumes />} />
      </Routes>
    </Router>
   </GoogleOAuthProvider>
  );
}

export default App;