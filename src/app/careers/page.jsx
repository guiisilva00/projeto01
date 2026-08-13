import "./careers.css";

export default function Careers() {
  return (
    <section className="careers-container container">
      <h1 className="title-careers">Careers & Leadership</h1>

      <div className="careers-conteudo">
        <div className="careers-lista">
          <article className="career-item">
            <p className="career-titulo">
              <a href="#">Beatriz Moraes — Founder & CEO</a>
            </p>
            <p className="p-careers">
              Pioneer in digital media buying with over 15 years of experience scaling growth-stage companies through Meta Ads and performance marketing.
            </p>
          </article>

          <article className="career-item">
            <p className="career-titulo">
              <a href="#">Senior Media Buyers & Strategists</a>
            </p>
            <p className="p-careers">
              Our team consists of top-tier talent managing high-budget ad accounts, with proven track records across e-commerce, SaaS, and lead gen.
            </p>
          </article>

          <article className="career-item">
            <p className="career-titulo">
              <a href="#">Join Our Team</a>
            </p>
            <p className="p-careers">
              We are constantly looking for world-class media buyers, creative strategists, and data analysts ready to manage $100M+ in ad spend.
            </p>
          </article>
        </div>

        <div className="careers-imagem">
          <img src="/imagens/beatriz.png" alt="Tier 11 Team" />
        </div>
      </div>
    </section>
  );
}