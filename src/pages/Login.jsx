import Login from '../components/credentials/Login';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    navigate('/'); // Redirige al home o chat después del login
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <Login onLogin={handleLoginSuccess} />
        <p className="mt-4 text-center text-sm text-gray-600">
          ¿No tienes una cuenta?
          <Link to="/register" className="text-blue-600 hover:underline ml-1">
            Regístrate
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
