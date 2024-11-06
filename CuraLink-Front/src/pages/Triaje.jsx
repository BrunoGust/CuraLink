import React, { useState } from 'react';
import './Triaje.css';
import useSpeechRecognition from './UseSpeechRecognition';


const Triaje = () => {
    const { text, setText, isListening, startListening, stopListening } = useSpeechRecognition();
    const handleSubmit = () => {
        const sintomasText = document.getElementById('sintomas-textarea').value;
        setText(sintomasText);
        document.getElementById('estado').value = "Moderado";
    };
    const clearText = () => {
        setText('');
        document.getElementById('estado').value = "";
    }

    return (
    <div className="triaje-container">
        <div className="triaje-header">
        <h1>Descripción de síntomas</h1>
        </div>
        <div className="triaje-section">
        <div className="text-box">
            <h2>Describe tus sistomas aqui</h2>
            <textarea id='sintomas-textarea'
            placeholder="Describe tus síntomas"
            />
            <button className="submit-btn1" onClick={handleSubmit}>Enviar</button>
        </div>
        <div className="microphone-box">
            <button
            onMouseDown={startListening}
            onMouseUp={stopListening}
            className="microphone-btn"
            >
            <img src="microphone-icon.png" alt="Micrófono" />
            
            </button>
            <p>{isListening ? 'Escuchando sintomas...' : 'Presiona hablar y describir tus sintomas'}</p>
        
            
        </div>
        <div className="summary-box">
            <h2>Resumen</h2>
            <p>Sintomas detectados</p>
            <textarea className="summary" placeholder="Síntomas detectados" value={text} readOnly />
            <p>Estado</p>
            <textarea id="estado" className="status" type="text" placeholder="Estado"  readOnly/>
            <button className="submit-btn2" onClick={clearText}>Enviar</button>
        </div>
        </div>
    </div>
    );
};

export default Triaje;
