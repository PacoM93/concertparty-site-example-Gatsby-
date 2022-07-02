import React from "react"

import './footer.scss'

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <p>
            &copy; Concert Party {new Date().getFullYear()}. All rights
            reserved.
            </p>
          </div>
          <div className="col">
            <ul className="footer-links">
                <li>
                    <a href="">
                        <i className="bi-facebook" />
                    </a>
                </li>
                <li>
                    <a href="">
                        <i className="bi-instagram" />
                    </a>
                </li>
                <li>
                    <a href="">
                        <i className="bi-twitter" />
                    </a>
                </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
