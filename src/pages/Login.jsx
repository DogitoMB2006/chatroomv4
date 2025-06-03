import Login from '../components/credentials/Login';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    navigate('/'); // Redirige al home o chat después del login
  };

  return (
    <div>
      <h1>Página de Login</h1>
      <Login onLogin={handleLoginSuccess} />
    </div>
  );
};

export default LoginPage;
