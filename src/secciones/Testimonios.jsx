export default function Testimonios() {
  return (
    <section id="testimonios" className="section">
      <div className="container">
        <h2 className="section-title">Testimonios reales</h2>
        <p className="section-subtitle">
          Historias de personas que encontraron guía, claridad y paz emocional.
        </p>
        <div className="grid-cards">
          <article className="card">
            <p className="quote">
              “Sentí un cambio desde la primera limpieza. Me devolvió la calma y la confianza.”
            </p>
            <strong>- Paola M.</strong>
          </article>
          <article className="card">
            <p className="quote">
              “El ritual me ayudó a abrir oportunidades en mi negocio. Recomendadísima.”
            </p>
            <strong>- Roberto G.</strong>
          </article>
          <article className="card">
            <p className="quote">
              “Me guió con mucha paciencia y amor. Volví a sentirme en paz.”
            </p>
            <strong>- Adriana L.</strong>
          </article>
        </div>
      </div>
    </section>
  )
}
