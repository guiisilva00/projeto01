import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <header className="header-tier">
        <div className="nome-empresa">Tier</div>
        <nav>
          <a href="#">What we do</a>
          <a href="#">Blog</a>
          <a href="#">Podcast</a>
          <a href="#">Careers</a>
          <a href="#" className="cta">Work with us</a>
        </nav>
      </header>

      <section className="container">
        <h1 className="principal-title">Unlock your business Potential With Facebook & Instagram Advertising</h1>
        <p className="principal-subtitle">Facebook Premier Level Partner Agency</p>
        <a href="#" className="cta" id="cta-principal">Work with us</a>
        <img src="/imagens/foguetinho.png" alt="" srcset="" />
      </section>
    </>
  );
}
