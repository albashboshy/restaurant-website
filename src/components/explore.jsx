import "./explore.css";
//  import photos 
import foodOne from '../assets/foodOne.jpg';
import foodTwo from  '../assets/foodTwo.jpg'
import foodThree from  '../assets/foodThree.jpg'
export default function Explore() {
  return (
    <div className="explore" id="explore"  >
      <div className="container">
        <div className="row  text-center d-flex justify-content-center align-items-center">
          <div className="co-sm-12 col-md-12 col-lg-6 pt-5 ">
            <h2 className="ex-title fw-bold pt-3">Explore Our Foods</h2>
            <p className="mt-5 ex-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
              purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat
              tellus. Far far away, behind the word mountains, far from the
              countries Vokalia and Consonantia, there live the blind texts.
              Separated they live in Bookmarksgrove.
            </p>
          </div>
        </div>
        <div className="row  d-flex ">
          <div className="col-sm-12 col-lg-4 pb-5 pt-5">
            <div className="card">
              <img  id='cd-img' className='image-fluid 'src={foodOne} className="card-img-top" alt="..." />

              <div className="card-body">
                <h5 className="card-title cd-title">Rainbow Vegetable Sandwich</h5>
                <p className="card-text cd-text">
                Time: 15 - 20 Minutes |
                </p>
                <p className="cd-serve pt-2">Serves: 1</p>
                <p className="cd-price">$10.50  <del>$11.70</del></p>
                <a href="#" className="btns shopping">
               Order Now
                </a>
              </div>
            </div>
          </div>
           <div className="col-sm-12 col-lg-4 pb-5 pt-5">
            <div className="card">
              <img  id='cd-img' className='image-fluid 'src={foodTwo} className="card-img-top" alt="foodtwo" />

              <div className="card-body">
                <h5 className="card-title cd-title">Vegetarian Burger</h5>
                <p className="card-text cd-text">
           Time: 30 - 45 Minutes |
                </p>
                <p className="cd-serve pt-2">Serves: 1</p>
                <p className="cd-price">$09.20  <del>$10.50</del></p>
                <a href="#" className="btns shopping">
               Order Now
                </a>
              </div>
            </div>
          </div>
           <div className="col-sm-12 col-lg-4 pb-5 pt-5">
            <div className="card">
              <img  id='cd-img' className='image-fluid 'src={foodThree} className="card-img-top" alt="foodthree" />

              <div className="card-body">
                <h5 className="card-title cd-title">Raspberry Stuffed French Toast</h5>
                <p className="card-text cd-text">
               Time: 10 - 15 Minutes | 
                </p>
                <p className="cd-serve pt-2">Serves: 1</p>
                <p className="cd-price">$12:50  <del>$16.20</del></p>
                <a href="#" className="btns shopping">
               Order Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
