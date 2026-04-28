import aboutPhoto from "../assets/1.png";
import aboutSecond from "../assets/2.png";
import { FaCheck } from "react-icons/fa6";
import { CiPlay1 } from "react-icons/ci";

import "./about.css";
export default function About() {
  return (
    <div className="about" id="about">
      <div className="container">
        <div className="row ">
          <div className="col-sm-12 col-lg-8  about-img pt-5 pb-5">
            <img className="img-fluid" src={aboutPhoto} alt="phot" />
          </div>
          <div className="col-sm-12 col-md-12 col-lg-4 about-text d-flex flex-column justify-content-center align-items-center">
            <h2 className="mt-lg-3">
              We pride ourselves on making real food from the best ingredients.
            </h2>
            <p className="mt-lg-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
              purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat
              tellus.
            </p>
            <button className="btn lrean-more button-about"> lrean more</button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-gl-6 d-flex flex-column justify-content-center">
            <h2 className="about-title mt-md-3">
              We make everything by hand with the best possible ingredients.
            </h2>
            <p className="mt-3 text-start about-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
              purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat
              tellus.Far far away, behind the word mountains, far from the
              countries Vokalia and Consonantia, there live the blind texts.
            </p>
            <div>
              <ol className="list-unstyled mp-3 about-list ">
                <li>
                  <FaCheck /> <span>Etiam sed dolor ac diam volutpat.</span>
                </li>
                <li>
                  <FaCheck /> <span>Erat volutpat aliquet imperdiet.</span>
                </li>
                <li>
                  <FaCheck /> <span>purus a odio finibus bibendum.</span>
                </li>
              </ol>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center align-items-center">
            <img className="img-fluid" src={aboutSecond} alt="about-photo" />
          </div>
        </div>
      </div>
      <div className="third-part-about">
        <div className="container">
          <div className="row pt-5 d-flex justify-content-center align-items-center">
            <div className="col-sm-12 col-md-12 col-lg-6  pt-5  ">
              <h2 className="text-center fw-bold">
                
                When a man's stomach is full it makes no difference whether he
                is rich or poor.
              </h2>
              <p className="text-center  third-part-text  pt-sm-3 pt-lg-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                et purus a odio finibus bibendum in sit amet leo. Mauris feugiat
                erat tellus.
              </p>
              <button>
                <CiPlay1 /> watch story
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
