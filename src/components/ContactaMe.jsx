import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactaMe = () => {
  const refForm = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const serviceId = "service_dqx6x6a";
    const templateId = "template_o3zqh3w";

    const apiKey = "L2RZ-_19JBq-B8B2Z";

    emailjs
      .sendForm(serviceId, templateId, refForm.current, apiKey)
      .then((result) => console.log(result.text))
      .catch((error) => console.error(error));
  };
  return (
    <>
      <h1>Contacto</h1>
      <form ref={refForm} action="" onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="">Nombre</label>
          <input
            type="text"
            name="name"
            placeholder="Ejemplo Frank Bedoya"
            required
          />
          <label htmlFor="" name="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Ejemplo franksurenuga@gmail.com"
            required
          />
          <label htmlFor="" name>
            Escribe Tu Mensaje
          </label>
          <textarea
            maxLength="500"
            name="message"
            cols="30"
            rows="10"
            required
          ></textarea>
        </fieldset>
        <button>Enviar</button>
      </form>
    </>
  );
};
