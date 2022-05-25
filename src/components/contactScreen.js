import React, { useState } from "react";
import Joi from "joi-browser";

import "../scss/contactScreen.scss";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({});

  return (
    <div className="contact-screen">
      <form>
        <input
          name="name"
          style={{ left: "100px", top: "95px" }}
          onChange={handleChange}
        ></input>
        <input
          name="email"
          style={{ left: "100px", top: "160px" }}
          onChange={handleChange}
        ></input>
        <textarea
          name="message"
          style={{ left: "10px", top: "275px" }}
          onChange={handleChange}
        ></textarea>
        <button
          type="button"
          style={{ left: "10px", top: "500px" }}
          onClick={handleValidate}
        >
          Send Message
        </button>
      </form>
      {renderErrors()}
    </div>
  );

  function renderErrors() {
    return Object.values(formErrors).map((error, i) => {
      return <p key={i}>{error}</p>;
    });
  }

  function handleChange(event) {
    const clone = { ...formData };
    clone[event.target.name] = event.target.value;
    setFormData(clone);
  }

  function handleValidate() {
    const schema = {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      message: Joi.string().required(),
    };

    const result = Joi.validate(formData, schema);
    if (!result.error) {
      handleSubmit();
    } else {
      const errors = {};
      for (let item of result.error.details) {
        errors[item.path[0]] = item.message;
      }
      setFormErrors(errors);
      return;
    }
  }

  async function handleSubmit() {
    const payload = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    const res = await fetch("/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (res.status === 200) {
      alert("Message sent! I'll get back to you as soon as I can.");
    } else if (res.status === 500) {
      alert("Internal server error (500).");
    } else {
      alert("Something went wrong.");
    }
  }
}
