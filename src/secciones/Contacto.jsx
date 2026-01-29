export default function Contacto({ whatsappLink, telLink }) {
  return (
    <section id="contacto" className="section">
      <div className="container">
        <h2 className="section-title">Agenda tu consulta</h2>
        <p className="section-subtitle">
          Respuesta rápida. Atendemos con respeto y discreción. Escríbeme y revisamos tu caso.
        </p>
        <div className="contact-grid">
          <div className="contact-card">
            <h3>Consulta inmediata</h3>
            <p>Explícame tu situación y te propongo la mejor solución espiritual.</p>
            <div className="hero-actions">
              <a className="btn" href={whatsappLink} target="_blank" rel="noreferrer">
                WhatsApp directo
              </a>
              <a className="btn btn-outline" href={telLink}>Llamar</a>
            </div>
          </div>
          <div className="contact-card">
            <h3>Horarios</h3>
            <p>Domingo a domingo · 24 horas</p>
            <p>Atención a distancia disponible.</p>
            <p>Se aceptan consultas urgentes todo el día.</p>
          </div>
          <div className="contact-card">
            <h3>Confianza y seguridad</h3>
            <p>Tu información es privada. Te acompañaré de principio a fin.</p>
            <p>Resultados y seguimiento con orientación clara.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
