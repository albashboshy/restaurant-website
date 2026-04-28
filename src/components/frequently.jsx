import "./frequently.css";
import { useEffect, useRef, useState } from "react";
export default function Frquently() {
  const ref = useRef(null);
  const [show, setShow] = useState(false);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);
  return (
    <div className="frequently " id="faq">
      <div className="container">
        <h1 className="fw-bold text-center pt-5">Frequently Asked Questions</h1>
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6 mt-5 question">
            <h2>~ Is Foodera Bread really baked fresh each day?</h2>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language.
            </p>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 mt-5 question">
            <h2>~ Do you bake breads containing animal fats or products?</h2>
            <p>
              ar far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language.
            </p>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 mt-5 question">
            <h2>~ Can I order your products online?</h2>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language.
            </p>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 mt-5 question">
            <h2>~ When are you opening a shop near me?</h2>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language.
            </p>
          </div>
        </div>
      </div>
      <div
        ref={ref}
        className={`sec-part ${show ? "show" : ""}`}
        style={{
          backgroundPositionY: `${offset * 0.3}px`,
        }}
      >
        <div className="hu pt-5 pb-5 mt-5 mb-5">
        <div className="container">
             <div className="row d-flex align-items-center justify-content-center">
            <div className="col-sm-12 col-md-6 col-lg-6">
              <h2 className="fw-bold fresh">Baked fresh daily by bakers with passion.</h2>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <button className="lrean-more-btn">lrean more</button>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
