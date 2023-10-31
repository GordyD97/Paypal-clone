import React from 'react'

const Footer = () => {
  return (
    <section className="section-5">
      <div className="section-5-top">
        <h2 className="section-5-top-heading">Sign Up and Get Started</h2>
        <button className="blue-btn signup">Get Started</button>
      </div>
      <footer className="footer">
        <div className="footer-top">
          <ul className="footer-list">
            <li>
              <a href="#">Help and Contact</a>
            </li>
            <li>
              <a href="#">Fees</a>
            </li>
            <li>
              <a href="#">Security</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
          </ul>
          <ul className="footer-list">
            <li>
              <a href="#">English</a>
            </li>
            <li>
              <a href="#">Spanish</a>
            </li>
            <li>
              <a href="#">French</a>
            </li>
            <li>
              <a href="#">Italian</a>
            </li>
            <li>
              <a href="#">
                <img src="images/flag.png" alt="Flag" />
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-bottom">
          <p className="copyright">Copyright &copy; All Rights Reserved</p>
        </div>
      </footer>
    </section>
  );
}

export default Footer