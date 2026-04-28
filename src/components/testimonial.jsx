import "./testimonial.css";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
// import testimonial photos
import boy from "../assets/boy.jpg";
import girl from "../assets/girl.jpg";

export default function Testimonial() {
  return (
    <div className="testimonial pb-5" id="testimonial">
      <div className="container">
        <div className="row">
          <div className="col-12  pt-5 pb-5">
            <h2 className="fw-bold text-center pt-4">Testimonials</h2>
          </div>
        </div>

        <div className="row ">
          <div className="col-12 pt-5 pb-5">
            <Swiper spaceBetween={20} slidesPerView={1}
              pagination={{ clickable: true }}
              loop={true}
              autoplay={{ delay: 5000 }}
              pagination={{ clickable: true }}
              modules={[Pagination, Autoplay]}
            >
              <SwiperSlide>
                <div className="card rounded-5 p-3">
                  <img
                    className="image-fluid sw-img"
                    src={boy}
                    alt="boy"
                    loading="lazy"
                  />
                  <p className='sw-text'>
                    "far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                    far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts."
                  </p>
                  <h5>John Doe - ux Desginer</h5> 
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="card rounded-5 p-3">
                  <img
                    className="image-fluid sw-img"
                    src={girl}
                    alt="boy"
                    loading="lazy"
                  />
                  <p className='sw-text'>
                    "far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                    far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts."
                  </p>
                  <h5>maccy doe - front end</h5> 
                </div>
              </SwiperSlide>

              <SwiperSlide>
              <div className="card rounded-5 p-3">
                  <img
                    className="image-fluid sw-img"
                    src={girl}
                    alt="boy"
                    loading="lazy"
                  />
                  <p className='sw-text'>
                    "far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                    far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts."
                  </p>
                  <h5>kamalia san - web developer</h5> 
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
