import './App.css'
import { TELEFONO_CONTACTO } from './componentes/telefono.js'
import Contacto from './secciones/Contacto.jsx'
import Hero from './secciones/Hero.jsx'
import Historia from './secciones/Historia.jsx'
import Ritual from './secciones/Ritual.jsx'
import Servicios from './secciones/Servicios.jsx'
import Testimonios from './secciones/Testimonios.jsx'

function App() {
  const telefonoDigits = TELEFONO_CONTACTO.replace(/\D/g, '')
  const whatsappLink = `https://wa.me/${telefonoDigits}`
  const telLink = `tel:${telefonoDigits}`

  return (
    <div className="app">
      <header className="site-header">
        <div className="container header-content">
          <div className="brand">
            <span className="brand-badge">Maestro Lucio</span>
            <p className="brand-sub">Guía espiritual, limpieza energética y protección</p>
          </div>
          <nav className="nav">
            <a href="#hero">Inicio</a>
            <a href="#servicios">Servicios</a>
            <a href="#historia">Historia</a>
            <a href="#ritual">Ritual</a>
            <a href="#testimonios">Testimonios</a>
            <a href="#contacto">Contacto</a>
          </nav>
          <div className="header-cta">
            <a className="btn btn-outline" href={telLink}>Llamar</a>
            <a className="btn" href={whatsappLink} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </div>
        </div>
      </header>

      <main>
        <Hero whatsappLink={whatsappLink} telLink={telLink} />
        <Servicios />
        <Historia />
        <Ritual />
        <Testimonios />
        <Contacto whatsappLink={whatsappLink} telLink={telLink} />
      </main>

      <footer className="site-footer">
        <div className="container footer-content">
          <div>
            <strong>Maestro Lucio</strong>
            <p>Atención en México y asesorías a distancia.</p>
          </div>
          <div className="footer-actions">
            <span className="footer-phone">{TELEFONO_CONTACTO}</span>
            <a className="btn btn-outline" href={telLink}>Llamar ahora</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
