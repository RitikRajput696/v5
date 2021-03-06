import React from "react";

function ContactSection() {
  return (
    <section className="ContactSection container" id="contact">
      <div className="contact-container">
        <div>
          <span className="text-green">04.</span>
          <span className="mid-heading">What &#8217;s Next?</span>
        </div>

        <h1>Get in Touch</h1>
        <p className="form-para">
          I’m currently looking for any new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I’ll try my
          best to get back to you!
        </p>
        <form
          action="https://formspree.io/f/mayvgpjw"
          method="post"
          id="form"
          className="form"
        >
          <div>
            <label htmlFor="Full Name">Full Name</label>
            <input
              type="text"
              id="fullname"
              name="fullName"
              placeholder="John Wick"
              required
            />
          </div>
          <div>
            <label htmlFor="Email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="abc@example.com"
              required
            />
          </div>
          <div>
            <label htmlFor="Message">Message</label>
            <textarea
              name="Message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Say hello !"
              required
            ></textarea>
          </div>
          <button className="button" type="submit">
            <span> Send Message</span>
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
