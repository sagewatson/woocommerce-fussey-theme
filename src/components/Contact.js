import React from "react";
import { useForm, ValidationError } from "@formspree/react";
function Contact() {
  const [state, handleSubmit] = useForm("mqknaodd");
  if (state.succeeded) {
    return (
      <p className="text-white text-center text-2xl mt-10 ">
        Thanks for your enquiry! We'll get back to you as soon as possible.
      </p>
    );
  }
  return (
    <form className="contact-form text-white pt-10" onSubmit={handleSubmit}>
      <h2 className="text-white text-4xl text-center contact-us uppercase">
        Contact Us
      </h2>
      <label htmlFor="name">Name</label>
      <input
        className="feedback-input"
        id="name"
        type="text"
        name="name"
        placeholder="Name"
      />
      <ValidationError prefix="name" field="name" errors={state.errors} />

      <label htmlFor="email">Email Address </label>
      <input
        className="feedback-input"
        id="email"
        type="email"
        name="email"
        placeholder="Email"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <label htmlFor="message">Your Message </label>
      <textarea
        className="feedback-input"
        id="message"
        name="message"
        placeholder="Comment"
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />

      <button className="" type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}

export default Contact;
