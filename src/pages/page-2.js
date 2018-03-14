import React from 'react'
import Link from 'gatsby-link'

const SecondPage = () => (
  <div>
    <form name="contact" netlify-honeypot="bot-field" netlify>
      <p>
        <label>
          Your Name: <input type="text" name="name" />
        </label>
      </p>
      <p>
        <label>
          Your Email: <input type="email" name="email" />
        </label>
      </p>
      <p>
        <label>
          Message: <textarea name="message" />
        </label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
      <div netlify-recaptcha />
    </form>
  </div>
)

export default SecondPage
