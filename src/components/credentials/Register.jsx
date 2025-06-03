import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase';

const Register = ({ onRegister }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      if (onRegister) onRegister();
    } catch (error) {
      console.error('Error al registrarse:', error.message);
    }
  };

  return (
    <form onSubmit={handleRegister} className="space-y-6">

      <label className="input input-bordered flex items-center gap-2 bg-gray-800 text-white">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 01-8 0 4 4 0 018 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14v6m8 0H4" />
        </svg>
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
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0-1.657 1.343-3 3-3s3 1.343 3 3m-3 3v1m-9 2h12a2 2 0 002-2V9a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
        </svg>
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
        Crear cuenta
      </button>
    </form>
  );
};

export default Register;
