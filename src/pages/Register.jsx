import Register from '../components/credentials/Register';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const navigate = useNavigate();

  const handleRegisterSuccess = () => {
    navigate('/'); // Redirige al home o chat después del registro
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Página de Registro</h1>
        <Register onRegister={handleRegisterSuccess} />
      </div>
    </div>
  );
};

export default RegisterPage;
