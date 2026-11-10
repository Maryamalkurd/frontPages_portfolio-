import { useState } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_8k64i0h";
const TEMPLATE_ID = "template_ya4rv61";
const PUBLIC_KEY = "8vuxsNMW1YhgnvmDR";

const formInitialDetails = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
};

export const Contact = () => {
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send ↗");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({ ...formDetails, [category]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: `${formDetails.firstName} ${formDetails.lastName}`.trim(),
          reply_to: formDetails.email,
          phone: formDetails.phone,
          message: formDetails.message,
        },
        { publicKey: PUBLIC_KEY }
      );
      setFormDetails(formInitialDetails);
      setStatus({ success: true, message: "Message sent successfully" });
    } catch (err) {
      console.error(err);
      setStatus({
        success: false,
        message: "Something went wrong, please try again later.",
      });
    } finally {
      setButtonText("Send ↗");
    }
  };

  return (
    <section className="sx ct" id="connect">
      <div className="container">
        <div className="sx-head">
          <span>Contact</span>
          <span>Let's work together</span>
        </div>

        <div className="ct-grid">
          <div>
            <h2 className="ct-title">
              Have an idea? <em>Tell me about it.</em>
            </h2>
            <p className="ct-text">
              Send me a message about your project, idea or opportunity, and
              I'll get back to you.
            </p>
            <span className="ct-avail">
              <i />
              Open to new opportunities and freelance projects
            </span>
          </div>

          <form className="ct-form" onSubmit={handleSubmit}>
            <div className="ct-field">
              <label htmlFor="ct-first">First name</label>
              <input
                id="ct-first"
                type="text"
                required
                value={formDetails.firstName}
                placeholder="Your first name"
                onChange={(e) => onFormUpdate("firstName", e.target.value)}
              />
            </div>
            <div className="ct-field">
              <label htmlFor="ct-last">Last name</label>
              <input
                id="ct-last"
                type="text"
                value={formDetails.lastName}
                placeholder="Your last name"
                onChange={(e) => onFormUpdate("lastName", e.target.value)}
              />
            </div>
            <div className="ct-field">
              <label htmlFor="ct-email">Email address</label>
              <input
                id="ct-email"
                type="email"
                required
                value={formDetails.email}
                placeholder="you@company.com"
                onChange={(e) => onFormUpdate("email", e.target.value)}
              />
            </div>
            <div className="ct-field">
              <label htmlFor="ct-phone">Phone no.</label>
              <input
                id="ct-phone"
                type="tel"
                value={formDetails.phone}
                placeholder="Optional"
                onChange={(e) => onFormUpdate("phone", e.target.value)}
              />
            </div>
            <div className="ct-field ct-full">
              <label htmlFor="ct-message">Message</label>
              <textarea
                id="ct-message"
                rows="4"
                required
                value={formDetails.message}
                placeholder="Tell me a little about the work…"
                onChange={(e) => onFormUpdate("message", e.target.value)}
              ></textarea>
            </div>
            <div className="ct-actions">
              <button type="submit" disabled={buttonText === "Sending..."}>
                {buttonText}
              </button>
              {status.message && (
                <p className={status.success ? "ct-ok" : "ct-err"}>
                  {status.message}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
