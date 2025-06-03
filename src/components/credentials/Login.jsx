import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      if (onLogin) onLogin();
    } catch (error) {
      console.error('Error al iniciar sesión:', error.message);
    }
  };

  return (
    <form onSubmit={handleLogin} className="space-y-6">
      {/* Se quitó el segundo "Iniciar Sesión" */}
      <label className="input input-bordered flex items-center gap-2 bg-gray-800 text-white">
        <i className="ri-user-line"></i>
        <input
          type="email"
          placeholder="Correo electrónico"
          className="grow bg-transparent"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>

      <label className="input input-bordered flex items-center gap-2 bg-gray-800 text-white">
        <i className="ri-lock-password-line"></i>
        <input
          type="password"
          placeholder="Contraseña"
          className="grow bg-transparent"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>

      <button type="submit" className="btn btn-primary w-full">
        Entrar
      </button>
    </form>
  );
};

export default Login;
