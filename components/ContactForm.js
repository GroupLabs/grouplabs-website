
import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Styleshare } from "@icons-pack/react-simple-icons";
import styles from "./ContactForm.module.css"

export default function ContactForm() {
    const [submitterName, setSubmitterName] = useState("");
    const [SubmissionType, setSubmissiontype] = useState("Submit");
    const [ButtonColor, setButtonColor] = useState("#0e4726");
    const router = useRouter();
    const confirmationScreenVisible =
      router.query?.success && router.query.success === "true";
    const formVisible = !confirmationScreenVisible;

    function myFunction() {
      var x = document.getElementById("mySelect").value;
      setSubmissiontype(x);
      if (x == "Set up a meeting") {
        setButtonColor("#0B479F");
      }
      else if (x == "Learn more") {
        setButtonColor("#2C7235");
      }
      else if (x == "Request a quote") {
        setButtonColor("#B87106");
      }
      if (x == "Found a bug") {
        setButtonColor("black");
      }
      
    }

    const ConfirmationMessage = (
        <React.Fragment>
          <p>
            Thank you for submitting this form. Someone should get back to you
            within 24-48 hours.
          </p>
    
          <button
            onClick={() => router.replace("/contact", undefined, { shallow: true })}
          >
            Submit Another Response
          </button>
        </React.Fragment>
      );

      const ContactForm = (
        <form
          className={styles.cContainer}
          method="POST"
          name="contact-form"
          action="contact/?success=true"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input
            type="hidden"
            name="subject"
            value={`You've got mail from ${submitterName}`}
          />
          <input type="hidden" name="form-name" value="contact-form" />
          <p hidden>
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </p>

          <input
            id="name"
            name="name"
            placeholder="Name *"
            className={styles.cTextField}
            required
            onChange={(e) => setSubmitterName(e.target.value)}
            type="text"
          />
        <select
            name='type'
            defaultValue='Type of Enquiry *'
            className={styles.cSelectField}
            required
            id="mySelect"
            onChange={myFunction}
        >
            <option value="" selected disabled hidden>Type of Enquiry *</option>
            <option value="Set up a meeting">Set up a meeting</option>
            <option value="Learn more">Learn more</option>
            <option value="Request a quote">Request a quote</option>
            <option value="Found a bug">Found a bug</option>
        </select>
          <input id="company" name="company" placeholder="Company *"
            className={styles.cTextField} required type="text" />
          <input id="email" type="email" name="email" placeholder="Email *"
            className={styles.cTextField} required />
          <textarea id="message" name="message" placeholder="Message"
            className={styles.cTextField} />
          <button className={styles.cSubmitButton} style={{backgroundColor: `${ButtonColor}`}} type="submit">{SubmissionType}</button>
        </form>
      );

  return (
    <div className={styles.cMainContianer}>
        <div className={styles.cHeader}>Contact Us</div>
        
        <main>{formVisible ? ContactForm : ConfirmationMessage}</main>

    </div>
    
  )
}