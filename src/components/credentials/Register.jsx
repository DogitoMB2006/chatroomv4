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
    <form
      onSubmit={handleRegister}
      className="w-full max-w-sm bg-white p-6 rounded shadow-md"
    >
      <h2 className="text-xl font-semibold mb-4 text-center">Registrarse</h2>
      <input
        type="email"
        placeholder="Correo"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="mb-3 w-full border rounded px-3 py-2"
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="mb-4 w-full border rounded px-3 py-2"
      />
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
      >
        Crear cuenta
      </button>
    </form>
  );
};

export default Register;
