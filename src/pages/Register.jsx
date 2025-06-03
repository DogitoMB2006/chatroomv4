import Register from '../components/credentials/Register';
import { Link, useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const navigate = useNavigate();

  const handleRegisterSuccess = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="card w-full max-w-md bg-base-100 shadow-lg p-6">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold text-white mb-4">Crear Cuenta</h2>
          <Register onRegister={handleRegisterSuccess} />
          <p className="text-sm text-center mt-4 text-gray-400">
            ¿Ya tienes una cuenta?{' '}
            <Link to="/login" className="text-primary hover:underline">
              Inicia sesión
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
