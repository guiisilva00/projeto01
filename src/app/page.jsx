import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="container hero-secao">
        <div className="hero">
          <h1 className="principal-title">Unlock your business Potential With Facebook & Instagram Advertising</h1>
          <p className="principal-subtitle">Facebook Premier Level Partner Agency</p>
          <a href="#" className="cta" id="cta-principal">Work with us</a>
        </div>

        <div className="hero-imagem">
          <img
            src="/imagens/foguetinho.svg"
            alt="Ilustração de um foguete decolando para complementar o texto de publicidade"
            width={500}
            height={500}
            className="foguetinho-img"
          />
        </div>
      </section>
    </>
  );
} 