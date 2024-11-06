// src/pages/SingUp.jsx
import React from 'react';
import './SingUp.css';

function SingUp() {
  return (
    <div className="signup-page">
      <section className="info-section">
        <div className="icon-placeholder">X</div>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
      </section>

      <aside className="register-section">
        <h2>REGISTRO</h2>
        <form className="register-form">
          <input type="text" placeholder="Nombre de usuario" />
          <input type="text" placeholder="Celular" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Contraseña" />
          <button type="submit">REGISTRAR</button>
          <p>¿Ya tiene una cuenta? <a href="/">Ingrese aquí</a></p>
        </form>
      </aside>
    </div>
  );
}

export default SingUp;
