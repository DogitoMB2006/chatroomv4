import Login from '../components/credentials/Login';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    navigate('/'); // Redirige al home o chat después del login
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md">
       
        <Login onLogin={handleLoginSuccess} />
      </div>
    </div>
  );
};

export default LoginPage;
