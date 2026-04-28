import "./footer.css";
// import all brands 
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { ImYoutube2 } from "react-icons/im";
import { FaEarthAmericas } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";



export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 links pt-5 d-flex justify-content-center algn-items-center">
            <a href="#">register</a>
            <a href="#"> forum</a>
            <a href="#"> affiliate</a>
            <a href="#">FAQ</a>
          </div>
          <div className="col-sm-12 brands">
            <span><FaFacebookF/></span>
            <span><FaXTwitter/></span>
            <span><ImYoutube2/></span>
            <span><FaEarthAmericas/></span>
            <span><FaLinkedinIn/></span>
            <span><FaInstagram/></span>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 text-center fw-bold pt-5 copy-rights">
            <p>&copy;{new Date().getFullYear()} <span>foodera</span>.All Rights Reserved</p>
          </div>
        </div>
        <div className="row">
            <div className="col-sm-12 text-center fw-bold designer">
                <p>desgined by <span>Mahmoud Ahmed</span></p>
            </div>
        </div>
      </div>
    </div>
  );
}
