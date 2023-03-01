import './Contato.scss'

export default function Contato() {
  return (
    <div id="main-content">
      <div id="support-container">
        <section id="form-container" data-aos="fade-up">
          <div id="form-header">
            <h1 className="section-title">Contate-nos</h1>
          </div>

          <div id="form-body">
            <div className="vertical-line-contact-page"></div>
            <div className="contact-info">
              <div className="contact-info-place">
                <h3 className="contact-info-title">Casa das Fechaduras de Niterói</h3>
                <h4 className="contact-info-number">Telefone: (21) 3527-3000</h4>
                <p>Rua Marechal Deodoro, Nº 168, CEP 24030-060</p>
                <p>Centro - Niterói - Rio de Janeiro</p>
              </div>
              <div className="contact-info-place">
                <h3 className="contact-info-title">Casa das Fechaduras de São Gonçalo</h3>
                <h4 className="contact-info-number">Telefone: (21) 2713-6161</h4>
                <p>Rua Dr. Felíciano Sodré, Nº 57, CEP 24440-440</p>
                <p>Centro - São Gonçalo - Rio de Janeiro</p>
              </div>
              <div className="contact-info-opening-hours">
                <h3 className="contact-info-opening-hours-title">Horário de funcionamento:</h3>
                <h5>Segunda à sexta : 8h às 18h</h5>
                <h5>Sábado : 9h às 13h</h5>
                <h5>Feriados : Consultar instagram ou por ligação</h5>
              </div>
            </div>
            <div className="vertical-line-contact-page"></div>
            <hr />
          </div>
        </section>
      </div>
    </div>
  )
}
