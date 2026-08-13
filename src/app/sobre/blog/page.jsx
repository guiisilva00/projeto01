import "./blog.css";

export default function Blog() {
    return (
        <section className="blog-container container">
            <h1 className="title-blog">Our Blog</h1>

            <div className="blog-conteudo">
                <div className="blog-lista">
                    <article className="post-item">
                        <p className="post-titulo">
                            <a href="#">How We Scaled Digital Brands to $10M+/Year Using Meta Ads</a>
                        </p>
                        <p className="p-blog">
                            A detailed analysis of our campaign structures, media buying frameworks, and data-driven optimization strategies to generate fast, predictable growth.
                        </p>
                    </article>

                    <article className="post-item">
                        <p className="post-titulo">
                            <a href="#">ROAS Optimization: 5 Advanced Paid Media Tactics</a>
                        </p>
                        <p className="p-blog">
                            Learn how to maintain high efficiency and profit margins while aggressively scaling your ad spend across the Meta ecosystem.
                        </p>
                    </article>

                    <article className="post-item">
                        <p className="post-titulo">
                            <a href="#">The Future of Digital Ads and AI Targeting</a>
                        </p>
                        <p className="p-blog">
                            How evolving algorithms, machine learning, and shifts in consumer behavior are shaping high-performing advertising strategies.
                        </p>
                    </article>
                </div>

                <div className="blog-imagem">
                    <img src="/imagens/blog.png" alt="Blog Preview" />
                </div>
            </div>
        </section>
    );
}