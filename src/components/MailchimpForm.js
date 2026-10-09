import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Newsletter } from "./Newsletter";

const SERVICE_ID = "service_8k64i0h";
const TEMPLATE_ID = "template_5ph1079";
const PUBLIC_KEY = "8vuxsNMW1YhgnvmDR";

export const MailchimpForm = () => {
  const [status, setStatus] = useState(null);
  const [message, setMessage] = useState("");

  const subscribe = async (formData) => {
    setStatus("sending");
    setMessage("");

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        { subscriber_email: formData.EMAIL },
        { publicKey: PUBLIC_KEY }
      );
      setStatus("success");
      setMessage("Thanks for subscribing!");
    } catch (err) {
      console.error(err);
      setStatus("error");
      setMessage("Something went wrong, please try again later.");
    }
  };

  return (
    <Newsletter
      status={status}
      message={message}
      onValidated={(formData) => subscribe(formData)}
    />
  );
};
