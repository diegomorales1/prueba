import React, { useState } from 'react';

function Register({ onRegister, onError }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState(''); // Nuevo estado para la fecha de nacimiento
  const [telefono, setTelefono] = useState(''); // Nuevo estado para el teléfono
  const [alergias, setAlergias] = useState(''); // Nuevo estado para las alergias
  const [tramoFonasa, setTramoFonasa] = useState(''); // Nuevo estado para el tramo de FONASA
  const [rut, setRut] = useState('');

  const handleRegister = async () => {
    try {
      console.log('Datos del formulario:', { email, password });

      const response = await fetch('http://localhost:5000/api/register/paciente', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          nombre,
          apellido,
          fechaNacimiento,
          telefono,
          alergias,
          tramoFonasa,
          rut,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        onRegister();
      } else {
        console.error(data.message);
        onError('Error al registrarse. Asegúrate de que el correo electrónico no esté registrado.');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      onError('Error al registrarse. Inténtalo de nuevo más tarde.');
    }
  };

  return (
    <div className='container'>
      <h2>Registrarse</h2>
      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <label>Contraseña:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <label>Nombre:</label>
      <input
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <br />
      <label>Apellido:</label>
      <input
        type="text"
        value={apellido}
        onChange={(e) => setApellido(e.target.value)}
      />
      <br />
      <label>Fecha de Nacimiento:</label>
      <input
        type="date"
        value={fechaNacimiento}
        onChange={(e) => setFechaNacimiento(e.target.value)}
      />
      <br />
      <label>Teléfono:</label>
      <input
        type="text"
        value={telefono}
        onChange={(e) => setTelefono(e.target.value)}
      />
      <br />
      <label>Alergias:</label>
      <input
        type="text"
        value={alergias}
        onChange={(e) => setAlergias(e.target.value)}
      />
      <br />
      <label>Tramo FONASA:</label>
      <select
        value={tramoFonasa}
        onChange={(e) => setTramoFonasa(e.target.value)}
      >
        <option value="" disabled>Selecciona el tramo FONASA</option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
        <option value="D">D</option>
      </select>
      <br />
      <label>Rut:</label>
      <input
        type="text"
        value={rut}
        onChange={(e) => setRut(e.target.value)}
      />
      <br />
      <button onClick={handleRegister}>Registrarse</button>
    </div>
  );
}

export default Register;