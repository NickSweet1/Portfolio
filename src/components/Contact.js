import { React, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [isFormFilling, setFormFilling] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jdks8et",
        "template_07yovwk",
        form.current,
        "uS4JKS5KrzcNLqctZ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setFormFilling(false);
  };

  const handleFormFocus = () => {
    setFormFilling(true);
    console.log(isFormFilling);
  };

  const handleFormBlur = () => {
    setFormFilling(false);
  };

  return (
    <section className='background py-16'>
      <div className="container mx-auto flex flex-col md:flex-row">
        <div className="md:w-1/2 flex justify-center">
          <img
            src={process.env.PUBLIC_URL + "/images/IMG-4884.JPG"} // Replace with image path
            alt="Contact Image"
            className="w-5/6 rounded-full "
          />
        </div>

        <div className="pt-5 sm:pt-0 md:w-1/2  flex flex-col justify-center items-center">
        <div className={`bg-tan border border-white rounded-2xl ${isFormFilling ? 'bg-opacity-100' : 'bg-opacity-80'}`}>
            <h2 className="text-3xl text-white font-semibold mb-6 flex justify-center pt-6">
              Contact Us
            </h2>
            <form ref={form} onSubmit={sendEmail} onBlur={handleFormBlur}>
              <div className="mb-4 flex justify-center">
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="ml-6 mr-6 w-11/12 sm:w-96 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-tan"
                  placeholder="Your Name"
                  onFocus={handleFormFocus}
                  required
                />
              </div>

              <div className="mb-4 flex justify-center">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-11/12 sm:w-96 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-tan"
                  placeholder="Subject"
                  onFocus={handleFormFocus}
                  required
                />
              </div>

              <div className="mb-4 flex justify-center">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-11/12 sm:w-96 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-tan"
                  placeholder="Your Email"
                  onFocus={handleFormFocus}
                  required
                />
              </div>

              <div className="mb-4 flex justify-center">
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-11/12 sm:w-96 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-tan"
                  placeholder="Your Message"
                  onFocus={handleFormFocus}
                  required
                ></textarea>
              </div>

              <div className="mt-6 flex justify-center pb-6">
                <button
                  type="submit"
                  className="px-6 py-3 bg-beige text-tan font-semibold rounded-lg hover:bg-olive hover:shadow-white hover:text-beige focus:outline-none focus:bg-beige focus:text-tan"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
