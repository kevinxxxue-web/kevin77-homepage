export default function Home() {
  return (
    <main className="home" aria-label="Kevin Xue personal homepage">
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

      <section className="identity">
        <h1>Kevin Xue</h1>
        <p>aka Kevin77</p>
      </section>
    </main>
  );
}
