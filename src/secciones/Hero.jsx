export default function Hero({ whatsappLink, telLink }) {
  return (
    <section id="hero" className="hero">
      <div className="container hero-content">
        <div>
          <p className="section-subtitle">Transformación energética, amor y claridad interior.</p>
          <h1 className="hero-title">Limpieza espiritual y guía para sanar tu camino</h1>
          <p className="hero-text">
            Conecta con tu energía, equilibra tus emociones y abre los caminos del amor,
            la prosperidad y la paz. Atención personalizada con rituales tradicionales,
            lectura espiritual y acompañamiento cercano.
          </p>
          <div className="hero-actions">
            <a className="btn" href={whatsappLink} target="_blank" rel="noreferrer">
              Agenda por WhatsApp
            </a>
            <a className="btn btn-outline" href={telLink}>Llamar ahora</a>
          </div>
        </div>
        <div className="hero-card">
          <h3>¿Qué recibirás?</h3>
          <div className="hero-list">
            <span>✔ Limpieza de energías negativas y bloqueos.</span>
            <span>✔ Orientación espiritual con enfoque humano.</span>
            <span>✔ Rituales para amor, salud, protección y prosperidad.</span>
            <span>✔ Seguimiento después de cada sesión.</span>
          </div>
        </div>
      </div>
    </section>
  )
}
