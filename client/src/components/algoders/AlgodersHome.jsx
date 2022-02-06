import React from 'react';
import './AlgodersHome.css';

export default function Home() {
    return (
        <div>
             <section id="hero" className="d-flex h-100 ">
<div className="container ">
  <div className="row">
  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1 w-90 text-center">
            <h1 className="text-center fw-bolder text-white  mx-1 mx-md-4 mt-4 justify-content-center"> Welcome to ALGODERS COMMUNITY</h1>
            <h2 className=" mx-1 mx-md-4 mb-3 mt-4 text-center text-white shadow-sm" >A Small Place To Learn Code</h2>
            <h4 className='mx-1 mx-md-4 mb-3 mt-4 text-center text-primary prime-txt'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, quia porro possimus sapiente similique laborum quas ratione deserunt quaerat placeat distinctio illo ex inventore, consequatur, recusandae a alias consequuntur? Voluptatibus temporibus explicabo ipsa aspernatur veritatis molestias, consequuntur, magni deserunt necessitatibus corporis quidem similique veniam provident earum voluptatum impedit tenetur quasi?</h4>
            <div className="d-flex justify-content-center mx-4 mb-lg-4">
              <a href=""> <button  className="btn btn-primary btn-lg text-white">Get started <i
                    className="fas fa-arrow-circle-right"></i> </button> </a>
            </div>
          </div>
    <div className="col-lg-6 order-1 order-lg-2 hero-img  text-center" data-aos="zoom-in" data-aos-delay="200">
      <img src="https://bootstrapmade.com/demo/templates/Arsha/assets/img/hero-img.png" className="img-fluid animated" alt=""/>
    </div>
  </div>
</div>

</section>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#000"
            fillOpacity="1"
            d="M0,320L48,282.7C96,245,192,171,288,154.7C384,139,480,181,576,170.7C672,160,768,96,864,85.3C960,75,1056,117,1152,154.7C1248,192,1344,224,1392,240L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
        </div>
    )
}