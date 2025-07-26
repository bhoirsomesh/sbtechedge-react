import HeroSection from "../components/HeroSection";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <main>
      <HeroSection />

      <section className="features">
        <h2>Why Choose SBBBTechEdge?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Expert Teaching</h3>
            <p>Years of experience delivering ICT & CS education for global curricula.</p>
          </div>
          <div className="feature-card">
            <h3>Individual Attention</h3>
            <p>Small batches ensure personalized focus and clarity for every student.</p>
          </div>
          <div className="feature-card">
            <h3>Hands-on Practice</h3>
            <p>Real programming tasks, practicals, and past papers for solid preparation.</p>
          </div>
          <div className="feature-card">
            <h3>Flexible Learning</h3>
            <p>Attend online or offline in Mumbai, with flexible schedules to suit you.</p>
          </div>
        </div>
      </section>

      <section className="quick-links">
        <Link to="/courses" className="quick-link">
          Explore Courses
        </Link>
        <Link to="/materials" className="quick-link">
          Study Materials
        </Link>
        <Link to="/contact" className="quick-link">
          Contact Us
        </Link>
      </section>

      <section className="testimonials">
        <h2>What Our Students Say</h2>
        <div className="testimonial-grid">
          <div className="testimonial-card">
            <p>
              "Thanks to SBTechEdge, I scored an A* in my IGCSE Computer Science exams.
              The classes are so clear and practical!"
            </p>
            <span>- Aryan S., Grade 10</span>
          </div>
          <div className="testimonial-card">
            <p>
              "The online classes were interactive and fun. I finally understood programming concepts."
            </p>
            <span>- Ananya T., A Level Student</span>
          </div>
          <div className="testimonial-card">
            <p>
              "Very helpful for exam prep and real-life coding skills. Highly recommend!"
            </p>
            <span>- Rohan M., Parent</span>
          </div>
          <div className="testimonial-card">
            <p>
              "The study materials were amazing and helped me prepare quickly before my finals."
            </p>
            <span>- Priya M., AS Level Student</span>
          </div>
          <div className="testimonial-card">
            <p>
              "Small batches and personal attention made all the difference. I felt confident during exams."
            </p>
            <span>- Karan D., IGCSE Student</span>
          </div>
          <div className="testimonial-card">
            <p>
              "I enjoyed learning Python from scratch with SBTechEdge. It was so practical and easy to follow."
            </p>
            <span>- Sneha R., Programming Learner</span>
          </div>
          <div className="testimonial-card">
            <p>
              "Sir's teaching style is very clear, and he makes tough topics simple."
            </p>
            <span>- Mihir P., A Level Student</span>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
