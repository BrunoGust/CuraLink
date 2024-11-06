import React, { useState } from 'react';
import './ConsulFrec.css'; // Importar archivo CSS para estilos

const ConsulFrec = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "¡Hola! 😊 Soy tu asistente virtual de salud. Estoy aquí para responder tus preguntas sobre medicamentos, efectos secundarios o procedimientos médicos." },
  ]);

  const handleMessage = () => {
    let message = document.getElementById('consulta').value;
    document.getElementById('consulta').value = "";
    setMessages([
        ...messages, 
        { sender: "user", text: message },
        { sender: "bot", text: "Gracias por tu consulta, pero de momento aún estoy en mantenimiento." }
    ]);
    
  };

  return (
    <div className="consul-frec-container">
      {/* Cabecera */}
      <div className="consul-frec-header">
        <h1>Preguntas Frecuentes</h1>
        </div>
        
      {/* Sección de Chat */}
      <div className="chat-section">
        {messages.map((message, index) => (
          <div key={index} className={`chat-message ${message.sender === "user" ? "user-message" : "bot-message"}`}>
            <div className="avatar">{/* Avatar del asistente */}</div>
            <div className="message">
              <p className="pregunta"></p>{message.text}
            </div>
            
          </div>
        ))}
      </div>

      {/* Campo de Entrada */}
      <div className="chat-footer">

      <input id="consulta" type="text" placeholder="Escribe tu pregunta..." />
      <button onClick={handleMessage}>Enviar</button>
      </div>

      {/* Imagen del Asistente */}
      <img src="asistente.png" alt="Asistente virtual" />
    </div>
  );
};

export default ConsulFrec;