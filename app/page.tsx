const portfolio = [
  { name: "XbotGo", category: "Sports imaging" },
  { name: "SATELLAI", category: "Pet wearable" },
  { name: "Fuzozo", category: "AI collectible" },
  { name: "Cambi", category: "Telescope" },
  { name: "Ambi", category: "Personal AI" },
];

export default function Home() {
  return (
    <main className="home" aria-label="Kevin Xue personal homepage">
      <section className="hero" id="top" aria-labelledby="kevin-name">
        <div className="scene" aria-hidden="true">
          <div className="sky" />
          <video
            className="motionVideo"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/pacific-twilight.webp"
          >
            <source src="/pacific-twilight-motion.mp4" type="video/mp4" />
          </video>
          <div className="haze hazeOne" />
          <div className="haze hazeTwo" />
          <div className="cityGlow" />
          <div className="vignette" />
          <div className="grain" />
        </div>

        <nav className="nav" aria-label="Primary navigation">
          <a className="monogram" href="#top" aria-label="Kevin Xue, home">
            KX
          </a>
          <a href="#portfolio">Portfolio</a>
        </nav>

        <div className="identity">
          <h1 id="kevin-name">Kevin Xue</h1>
          <p>aka Kevin77</p>
        </div>

        <a className="scrollCue" href="#portfolio">
          <span>Selected investments</span>
          <i aria-hidden="true" />
        </a>
      </section>

      <section className="portfolio" id="portfolio" aria-labelledby="portfolio-title">
        <div className="portfolioFrame">
          <header className="portfolioHeader">
            <p className="eyebrow">Portfolio · Selected</p>
            <h2 id="portfolio-title">AI, made tangible.</h2>
            <p className="portfolioIntro">
              Early conviction in AI-native consumer hardware.
            </p>
          </header>

          <div className="portfolioGrid">
            {portfolio.map((company, index) => (
              <article className="portfolioCard" key={company.name}>
                <span className="cardIndex">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{company.name}</h3>
                  <p>{company.category}</p>
                </div>
              </article>
            ))}

            <article className="portfolioCard stealthCard">
              <span className="cardIndex">06+</span>
              <div>
                <h3>Undisclosed</h3>
                <p>Consumer AI hardware</p>
              </div>
              <span className="stealthLabel">Stealth</span>
            </article>
          </div>

          <footer className="footer">
            <span>Kevin Xue</span>
            <span>aka Kevin77</span>
          </footer>
        </div>
      </section>
    </main>
  );
}
