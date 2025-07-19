function ContactPage() {
    return (
      <main className="contact-section">
        <h1>Contact Us</h1>
        <div className="contact-details">
          <p>Email: <a href="mailto:info@sbtechedge.com">info@sbtechedge.com</a></p>
          <p>WhatsApp: <a href="https://wa.me/918446111735" target="_blank">+91-8446111735</a></p>
          <p>Mumbai, India</p>
        </div>
        <form className="contact-form" action="#" method="post">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </main>
    );
  }
  
  export default ContactPage;
  