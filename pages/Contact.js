import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact bg-slate-50 py-3 text-center rounded-md">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-lg font-medium pt-8 pb-2">Contact Me</h2>
        <p>If you have any inquiries or if you would like to work together, feel free to reach out!</p>
        {/* Add your contact form here */}
        <form className="f-1" action="https://formspree.io/f/mvonypvv" method="post">
          <div className="mb-4">
            <label htmlFor="first-name" className="block text-gray-700 text-sm font-medium mb-2">
              First Name
            </label>
            <input
              id="first-name"
              name="user_name"
              type="text"
              required
              placeholder="Enter your first name"
              maxLength="30"
              className="input-field rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
              Email Address
            </label>
            <input
              id="email"
              name="user_email"
              type="email"
              required
              placeholder="Enter your email address"
              className="input-field rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 text-sm font-medium mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message here..."
              cols="50"
              rows="5"
              maxLength="500"
              required
              className="input-field rounded-md"
            ></textarea>
          </div>
          <button className="cont-btn bg-teal-500 hover:bg-blue-500 rounded-md" type="submit">
            Get in touch
          </button>
          <p className="error"></p>
        </form>
      </div>
    </section>
  );
};

export default Contact;
