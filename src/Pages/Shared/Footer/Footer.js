import './Footer.css';
import React from 'react';
import { AiOutlineFacebook, AiFillInstagram } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
import { IoLogoWhatsapp } from 'react-icons/io';

const Footer = () => {
  return (
    <div>
      {/* <section>Footer Example 4</section> */}
      <footer className="footer-distributed">
        <div className="footer-left">
          <h3>
            G<span>tech</span>
          </h3>

          <p className="footer-company-name">Gtech © 2012</p>
        </div>

        <div className="footer-center">
          <div>
            <i className="fa fa-map-marker"></i>
            <p>
              <span>444 S. Cedros Ave</span> Solana Beach, California
            </p>
          </div>

          <div>
            <i className="fa fa-phone"></i>
            <p>+1.555.555.5555</p>
          </div>

          <div>
            <i className="fa fa-envelope"></i>
            <p>
              <a href="mailto:support@company.com">support@company.com</a>
            </p>
          </div>
        </div>

        <div className="footer-right">
          <p className="footer-company-about">
            <span>Company's Social Link</span>
            <AiOutlineFacebook
              style={{ width: '30', height: '30' }}
              className="text-info me-2"
            />
            <AiFillInstagram
              style={{ width: '30', height: '30' }}
              className=" text-info me-2"
            />
            <BsLinkedin
              style={{ width: '30', height: '30' }}
              className=" text-info me-2"
            />
            <IoLogoWhatsapp
              style={{ width: '30', height: '30' }}
              className=" text-info me-2"
            />
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
