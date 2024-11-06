import React, { useState } from 'react';
import './ProCita.css';

const ProCita = () => {
  // Estado para el paso actual y los datos de la cita
  const [step, setStep] = useState(1);
  const [appointment, setAppointment] = useState({
    type: '',          // Tipo de cita: 'Virtual' o 'Presencial'
    specialty: '',     // Especialidad seleccionada
    specialist: '',    // Especialista seleccionado
    date: '',          // Fecha seleccionada
    time: ''           // Hora seleccionada
  });

  // Controlador para avanzar o retroceder en los pasos
  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  // Controladores para actualizar el estado según el paso actual
  const handleTypeChange = (type) => setAppointment({...appointment, type });
  const handleSpecialtyChange = (event) => setAppointment({...appointment, specialty: event.target.value });
  const handleSpecialistChange = (event) => setAppointment({...appointment, specialist: event.target.value });
  const handleDateChange = (event) => setAppointment({...appointment, date: event.target.value });
  const handleTimeChange = (event) => setAppointment({...appointment, time: event.target.value });

  const finishStep = (event) => {
    alert("Cita confirmada");
    setStep(1);
  }

  // Renderizado del componente basado en el paso actual
  return (
    <div className="procita-container">
        <div className="procita-header">
        <h1>Reserva de cita</h1>
        </div>
    <div className="procita-section">
      {step === 1 && (
        <div>
          <h2>Seleccione el tipo de cita</h2>
          <button onClick={() => { handleTypeChange('Virtual'); nextStep(); }}>Virtual</button>
          <button onClick={() => { handleTypeChange('Presencial'); nextStep(); }}>Presencial</button>
        </div>
      )}

      {step === 2 && (
        <div>
          <h2>Seleccione la especialidad</h2>
          <select onChange={handleSpecialtyChange} value={appointment.specialty}>
            <option value="">Elige una especialidad</option>
            <option value="Cardiología">Cardiología</option>
            <option value="Dermatología">Dermatología</option>
            {/* Añade más opciones según sea necesario */}
          </select>
          <button onClick={nextStep}>Siguiente</button>
          <button onClick={prevStep}>Atrás</button>
        </div>
      )}

      {step === 3 && (
        <div>
          <h2>Seleccione el especialista</h2>
          <select onChange={handleSpecialistChange} value={appointment.specialist}>
            <option value="">Elige un especialista</option>
            <option value="Dr. Pérez">Dr. Pérez</option>
            <option value="Dra. Martínez">Dra. Martínez</option>
            {/* Añade más especialistas según sea necesario */}
          </select>
          <button onClick={nextStep}>Siguiente</button>
          <button onClick={prevStep}>Atrás</button>
        </div>
      )}

      {step === 4 && (
        <div>
          <h2>Seleccione la fecha y hora</h2>
          <input type="date" onChange={handleDateChange} value={appointment.date} />
          <input type="time" onChange={handleTimeChange} value={appointment.time} />
          <button onClick={nextStep}>Siguiente</button>
          <button onClick={prevStep}>Atrás</button>
        </div>
      )}

      {step === 5 && (
        <div className='summary'>
          <h2>Resumen de la cita</h2>
          <p>Tipo de cita: {appointment.type}</p>
          <p>Especialidad: {appointment.specialty}</p>
          <p>Especialista: {appointment.specialist}</p>
          <p>Fecha: {appointment.date}</p>
          <p>Hora: {appointment.time}</p>
          <button onClick={finishStep}>Confirmar</button>
          <button onClick={prevStep}>Atrás</button>
        </div>
      )}
    </div>
    </div>
  );
};

export default ProCita;
