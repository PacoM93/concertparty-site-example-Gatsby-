import React from "react"

import "./about.scss"

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <h4>Find Us</h4>
      <div className="location">
        <h5>Location</h5>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10756.651886897176!2d-106.143732761744!3d28.70399231724583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86ea4210ab42f3c9%3A0x39cb97094094ea6f!2sUACH-%20Facultad%20de%20Ingenier%C3%ADa!5e0!3m2!1ses-419!2smx!4v1656793610386!5m2!1ses-419!2smx"
          width=""
          height=""
          style={{ border: "0", marginTop: "0.5rem" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <ul>
          <li>Universidad Autónoma de Chihuahua</li>
          <li>Universidad Autónoma de Chihuahua Etapa II</li>
        </ul>
      </div>
      <div className="phone">
        <h5>Phone</h5>
        <ul>
          <li>+52 614 1774624</li>
          <li>+52 614 4265203</li>
        </ul>
      </div>
      <div className="socials">
        <h5>Socials</h5>
        <ul>
          <li>
            <a href="">
              <i className="bi-facebook"></i>
            </a>
          </li>
          <li>
            <a href="">
              <i className="bi-twitter"></i>
            </a>
          </li>
          <li>
            <a href="">
              <i className="bi-instagram"></i>
            </a>
          </li>
          <li>
            <a href="">
              <i className="bi-linkedin"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ContactInfo
