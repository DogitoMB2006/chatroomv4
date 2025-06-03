import Login from '../components/credentials/Login';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    navigate('/'); // Redirige al home o chat después del login
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="card w-full max-w-md bg-base-100 shadow-lg p-6">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold text-white mb-4">Iniciar Sesión</h2>
          <Login onLogin={handleLoginSuccess} />
          <p className="text-sm text-center mt-4 text-gray-400">
            ¿No tienes una cuenta?{' '}
            <Link to="/register" className="text-primary hover:underline">
              Regístrate
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
