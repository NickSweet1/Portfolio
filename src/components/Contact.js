import React from "react";

function Contact() {
  return (
    <section className="bg-olive py-16">
      <div className="container mx-auto flex flex-col md:flex-row">
        {/* Left Section with Image */}
        <div className="md:w-1/2 pr-6">
          <img
            src="/path-to-your-image.jpg" // Replace with your image path
            alt="Contact Image"
            className="w-full h-auto"
          />
        </div>

        {/* Right Section with Contact Form */}
        <div className="md:w-1/2 pl-6">
          <h2 className="text-3xl text-white font-semibold mb-6 flex justify-center">Contact Us</h2>
          <form>
            <div className="mb-4">
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="mb-4">
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Your Email"
                required
              />
            </div>

            <div className="mb-4">
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Your Message"
                required
              ></textarea>
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="px-6 py-3 bg-beige text-tan font-semibold rounded-lg hover:bg-tan hover:text-beige focus:outline-none focus:bg-beige focus:text-tan"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;