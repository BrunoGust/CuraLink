import './Profile.css';
import React, { useState } from 'react';

function Profile() {
  const [perfil, setPerfil] = useState({
    nombres: 'Juan',
    apellidos: 'Paredes Castro',
    tipoUsuario: 'Paciente',
    edad: 36,
    talla: '1.72 m',
    peso: '80 kg',
    grupoSanguineo: 'O',
    rh: 'Negativo',
    telefono: '999999999'
  });

  const [editMode, setEditMode] = useState(false); // Estado para manejar el modo de edición

  // Función para activar el modo de edición
  const editBtn = () => {
    setEditMode(true);
  };

  // Función para guardar los cambios
  const saveBtn = () => {
    setEditMode(false);
  };

  // Función para manejar los cambios en los inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPerfil({
      ...perfil,
      [name]: value
    });
  };

  return (
    <div className="form-container">
      <div className="form-header">
      <h1>Perfil</h1>
        </div>
      
      <div className="form-section">
      <div className="form-content">
        <div className="form-group">
          <label>Nombres:</label>
          <input
            name="nombres"
            value={perfil.nombres}
            onChange={handleInputChange}
            disabled={!editMode} // Deshabilitar si no está en modo de edición
          />
        </div>
        <div className="form-group">
          <label>Apellidos:</label>
          <input
            name="apellidos"
            value={perfil.apellidos}
            onChange={handleInputChange}
            disabled={!editMode}
          />
        </div>
        <div className="form-group">
          <label>Tipo de Usuario:</label>
          <input
            name="tipoUsuario"
            value={perfil.tipoUsuario}
            onChange={handleInputChange}
            disabled={!editMode}
          />
        </div>
        <div className="form-group">
          <label>Edad:</label>
          <input
            name="edad"
            value={perfil.edad}
            onChange={handleInputChange}
            disabled={!editMode}
          />
        </div>
        <div className="form-group">
          <label>Talla:</label>
          <input
            name="talla"
            value={perfil.talla}
            onChange={handleInputChange}
            disabled={!editMode}
          />
        </div>
        <div className="form-group">
          <label>Peso:</label>
          <input
            name="peso"
            value={perfil.peso}
            onChange={handleInputChange}
            disabled={!editMode}
          />
        </div>
        <div className="form-group">
          <label>Grupo sanguíneo:</label>
          <input
            name="grupoSanguineo"
            value={perfil.grupoSanguineo}
            onChange={handleInputChange}
            disabled={!editMode}
          />
        </div>
        <div className="form-group">
          <label>RH:</label>
          <input
            name="rh"
            value={perfil.rh}
            onChange={handleInputChange}
            disabled={!editMode}
          />
        </div>
        <div className="form-group">
          <label>Teléfono:</label>
          <input
            name="telefono"
            value={perfil.telefono}
            onChange={handleInputChange}
            disabled={!editMode}
          />
        </div>
        <div className="form-buttons">
          {!editMode ? (
            <button className="btn" onClick={editBtn}>Editar</button>
          ) : (
            <button className="btn" onClick={saveBtn}>Guardar</button>
          )}
        </div>
      </div>
      </div>
    </div>
  );
}

export default Profile;
