import classes from "./contact-form.module.css";
import { useState, useEffect } from "react";
import Notification from "../ui/notification";
function ContactForm() {
  const [status, setStatus] = useState();

  useEffect(() => {
    if (status === "success" || status === "error") {
      const timer = setTimeout(() => {
        setStatus(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  async function sendMessageHandler(event) {
    event.preventDefault();
    setStatus("pending");
    const formData = new FormData(event.target);
    const formDataObject = Object.fromEntries(formData);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(formDataObject),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
        throw new Error(data.message || "Something went wrong!");
      }
    } catch (error) {
      setStatus("error");
      console.log(error);
    }
    event.target.reset();
  }
  let notification;
  if (status === "pending") {
    notification = {
      status: "pending",
      title: "Sending message...",
      message: "Your message is on its way!",
    };
  }
  if (status === "success") {
    notification = {
      status: "success",
      title: "Message sent!",
      message: "Your message was sent successfully!",
    };
  }
  if (status === "error") {
    notification = {
      status: "error",
      title: "Error!",
      message: "Something went wrong!",
    };
  }
  return (
    <section className={classes.contact}>
      <h1>Contact Me</h1>
      <form className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input type="email" name="email" id="email" required />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input type="text" name="name" id="name" required />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea name="message" id="message" rows="5" required></textarea>
        </div>
        <div className={classes.actions}>
          <button type="submit">Send Message</button>
        </div>
      </form>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </section>
  );
}

export default ContactForm;
