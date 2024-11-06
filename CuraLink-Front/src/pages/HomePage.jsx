//import Navbar from '../components/Navbar'
import './HomePage.css';
import Navbar from '../components/Navbar';

function HomePage() {
  
    return (
        <div className="homepage">
          <section className="main-section">
            <div className="main-logo">
              <img src="logo_curalink.jpeg" alt="CuraLink Logo" />
              <div className='curalink-main'>
                <h1>CuraLink</h1>
                <p>Tu salud, a un clic de distancia</p>
              </div>
              
            </div>
            
            <div className="services">
              <div className="service-item">
                <div className="icon-placeholder">X</div>
                <p>Diagnóstico</p>
              </div>
              <div className="service-item">
                <div className="icon-placeholder">X</div>
                <p>Preguntas Frecuentes</p>
              </div>
              <div className="service-item">
                <div className="icon-placeholder">X</div>
                <p>Programación de citas</p>
              </div>
            </div>
          </section>
    
          <aside className="login-section">
            <h2>INICIA SESIÓN</h2>
            <form className="login-form">
              <input type="email" placeholder="Ingresar usuario o e-mail" />
              <input type="password" placeholder="Ingresar contraseña" />
              <p>¿Nuevo aquí? <a href="/registro">Crea una cuenta ahora!</a></p>
              <button type="submit" >ENTRAR</button>
              
            </form>
          </aside>
        </div>
      );
}

export default HomePage