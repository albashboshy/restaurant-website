// header css file 
import './header.css'
//  react icons 
import { IoIosArrowForward } from "react-icons/io";

// import React from 'react'
import { TiShoppingCart } from "react-icons/ti";
export default function Header() {
  return (
   <header> 
         <div className="container" id='home'>
            <div className="row d-flex justify-content-between align-items-center">
                <div className="col-sm-12 col-md-6 pt-5 hero-section ">
                    <h2 className='mt-5'>Good food choices <br/> are good investments.</h2>
                    <h4 className='mb-5 header-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum amet leo.</h4>
                    <div className="btns mt-4">
                        <button className="btn1 btn shopping">Order Now <TiShoppingCart/></button>
                        <button className="btn2 lrean-more">Learn More <IoIosArrowForward/></button>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6"></div>
            </div>
    </div>
   </header>
  )
}
