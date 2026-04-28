import "./subscribe.css";

export default function Subscribe() {
  return (
    <div className="subscribe">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 pt-5">
            <h2>Hurry up! Subscribe our newsletter and get 25% Off</h2>
            <p>Limited time offer for this month. No credit card required.</p>
          </div>
        </div>
        <div className="row  sub pb-5">
          <div className="col-sm-12 col-md-12 col-lg-8 pt-3  sub-card ">
            <input type="email" placeholder="Email address here " />
          </div>
          <div className="col-sm-12 col-md-12 col-lg-4">
            <button className="btn btn-card"> subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
}
