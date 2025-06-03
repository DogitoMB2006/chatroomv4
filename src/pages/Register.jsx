import Register from '../components/credentials/Register';
import { Link, useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const navigate = useNavigate();

  const handleRegisterSuccess = () => {
    navigate('/'); // Redirige al home o chat después del registro
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <Register onRegister={handleRegisterSuccess} />
        <p className="mt-4 text-center text-sm text-gray-600">
          ¿Ya tienes una cuenta?
          <Link to="/login" className="text-blue-600 hover:underline ml-1">
            Inicia sesión
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
