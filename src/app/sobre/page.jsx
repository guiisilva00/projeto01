import "./sobre.css";

export default function Sobre() {
  return (
    <section className="sobre-container container">
      <h1 className="title-sobre">What We Do</h1>

      <div className="sobre-conteudo">
        <div className="sobre-texto">
          <p className="p-sobre">
            Leading the new era of digital business growth, we are a paid media intelligence consultancy managing over <strong>$100 million</strong> in annual digital ad spend. With more than <strong>15 years of expertise</strong> in the Meta ecosystem (Facebook & Instagram Ads), we transform paid traffic into predictable revenue assets for high-growth companies.
          </p>

          <p className="p-sobre">
            Our track record of excellence has established us as a leading industry authority recognized by the <strong>Inc. 5000</strong> and featured in <strong>Forbes</strong>. Working alongside tech giants like <strong>Google</strong> and <strong>Meta</strong>, we deliver high-precision scaling strategies driven by data, consumer behavior, and proprietary technology.
          </p>
        </div>

        <div className="sobre-imagem">
          <img src="imagens/mulherTablet.png" alt="What We Do" />
        </div>
      </div>
    </section>
  );
}