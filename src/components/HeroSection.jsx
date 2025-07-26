function HeroSection() {
  return (
    <section className="bg-white py-10">
      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 gap-10">
        <div className="text-center md:text-left max-w-xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Mastering ICT & Computer Science
          </h1>
          <p className="text-lg mb-6">
            Empowering learners with practical skills and exam confidence
            for IGCSE, AS & A Levels, and programming.
          </p>
          <a
            href="https://forms.gle/p5pNJcFV2Ftkh3Su9"
            className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow hover:bg-blue-700 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a Free Trial Class
          </a>
        </div>
        <img
          src="/undraw_programming_65t2.png"
          alt="Programming Illustration"
          className="w-72 md:w-96"
        />
      </div>
    </section>
  );
}

export default HeroSection;
