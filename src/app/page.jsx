import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <header className="header-tier">
        <Image src="/imagens/logo.svg" alt="Tier 11 Logo" width={120} height={40} className="header-logo" />
        <nav>
          <a href="#">What we do</a>
          <a href="#">Blog</a>
          <a href="#">Podcast</a>
          <a href="#">Careers</a>
          <a href="#" className="cta">Work with us</a>
        </nav>
      </header>

      <section className="container hero-secao">
        <div className="hero">
          <h1 className="principal-title">Unlock your business Potential With Facebook & Instagram Advertising</h1>
          <p className="principal-subtitle">Facebook Premier Level Partner Agency</p>
          <a href="#" className="cta" id="cta-principal">Work with us</a>
        </div>

        <div className="hero-imagem">
          <Image
            src="/imagens/foguetinho.svg"
            alt="Ilustração de um foguete decolando para complementar o texto de publicidade"
            width={500}
            height={500}
            className="foguetinho-img"
          />
        </div>
      </section>

      <footer className="footer-secao">
        <div className="container footer-conteudo">

          <div className="footer-item">
            <Image src="/imagens/facebook.svg" alt="Facebook" width={120} height={120} className="footer-img" />
            <span className="footer-legenda">Facebook Premier</span>
            <span className="footer-legenda">Level Agency Partner</span>
          </div>

          <div className="footer-item">
            <Image src="/imagens/google.svg" alt="Google" width={120} height={120} className="footer-img" />
            <span className="footer-legenda">Google Endorsed</span>
            <span className="footer-legenda">Marketing Partner</span>
          </div>

          <div className="footer-item">
            <Image src="/imagens/forbes.svg" alt="Forbes" width={120} height={120} className="footer-img" />
            <span className="footer-legenda">Forbes Agency</span>
            <span className="footer-legenda">Council Member</span>
          </div>

          <div className="footer-item">
            <Image src="/imagens/inc5000.svg" alt="Inc. 5000" width={120} height={120} className="footer-img" />
            <span className="footer-legenda">Inc. 5000</span>
            <span className="footer-legenda">Fastest growing company</span>
          </div>

          <div className="footer-item">
            <span className="metrica-valor">$100M</span><br />
            <span className="footer-legenda">In annual</span>
            <span className="footer-legenda">Digital Ad Spend</span>
          </div>

          <div className="footer-item">
            <span className="metrica-valor">15+</span><br />
            <span className="footer-legenda">Years of Facebook</span>
            <span className="footer-legenda">Advertising Experience</span>
          </div>

        </div>
      </footer>
    </>
  );
} 