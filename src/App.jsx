import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID || '615061233094-4rglkjpvnuo5oh8dsp3esvb5ojcs6qla.apps.googleusercontent.com';

function App() {
  return (
   <GoogleOAuthProvider clientId={googleClientId}>
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
   </GoogleOAuthProvider>
  );
}

export default App;