import "./podcast.css";

export default function Podcast() {
  return (
    <section className="podcast-container container">
      <h1 className="title-podcast">Tier 11 Podcast</h1>

      <div className="podcast-conteudo">
        <div className="podcast-lista">
          <article className="episode-item">
            <p className="episode-titulo">
              <a href="#">Ep. 104: Scalable Creative Frameworks for Meta Ads</a>
            </p>
            <p className="p-podcast">
              An inside look into how we test, iterate, and scale winning ad creatives without burning through your budget.
            </p>
          </article>

          <article className="episode-item">
            <p className="episode-titulo">
              <a href="#">Ep. 103: Managing $100M+ in Digital Ad Spend</a>
            </p>
            <p className="p-podcast">
              Key learnings, attribution strategies, and risk mitigation tactics when scaling high-budget paid media campaigns.
            </p>
          </article>

          <article className="episode-item">
            <p className="episode-titulo">
              <a href="#">Ep. 102: The Shift Toward First-Party Data & AI</a>
            </p>
            <p className="p-podcast">
              How top-tier brands are adapting their tracking infrastructure to stay ahead of algorithm updates and policy changes.
            </p>
          </article>
        </div>

        <div className="podcast-imagem">
          <img src="https://placehold.co/600x400" alt="Tier 11 Podcast Cover" />
        </div>
      </div>
    </section>
  );
}