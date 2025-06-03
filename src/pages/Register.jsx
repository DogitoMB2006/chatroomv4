import Register from '../components/credentials/Register';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const navigate = useNavigate();

  const handleRegisterSuccess = () => {
    navigate('/'); // Redirige al home o chat después del registro
  };

  return (
    <div>
      <h1>Página de Registro</h1>
      <Register onRegister={handleRegisterSuccess} />
    </div>
  );
};

export default RegisterPage;
