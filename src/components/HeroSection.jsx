function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-text">
          <h1>Mastering ICT & Computer Science</h1>
          <p>
            Empowering learners with practical skills and exam confidence
            for IGCSE, AS & A Levels, and programming.
          </p>
          <a
            href="https://forms.gle/p5pNJcFV2Ftkh3Su9"
            className="cta-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a Free Trial Class
          </a>
        </div>
        <img
          src="/undraw_programming_65t2.png"
          alt="Programming Illustration"
          className="hero-image"
        />
      </div>
    </section>
  );
}

export default HeroSection;
