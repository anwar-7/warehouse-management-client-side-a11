import React from 'react';
import './Review.css';
import { FaStar, FaStarHalf } from 'react-icons/fa';
import review1 from '../../../Assets/images/review/review1.png';
import review2 from '../../../Assets/images/review/review2.png';
import review3 from '../../../Assets/images/review/review3.png';

const Review = () => {
  return (
    <div>
      <div className="review-container">
        <h3 style={{ color: '#112B3C' }} className="text-center fw-bold">
          Customers Review
        </h3>
        <div>
          {/* this is review card container */}
          <div className="card-container">
            {/* here is 3 card */}
            <div className="project-card-body text-center">
              <img className=" img-fluid rounded" src={review1} alt="" />
              <h4 className=" mt-2">
                <span className=" fs-4 fw-bold">Malika</span>
              </h4>
              <div className="service-detail">
                <p style={{ color: 'orange' }}>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalf />
                </p>
                <p>
                  <small>
                    Company is a vary good in there product and service. I buy a
                    laptop from them they give it too me properly.
                  </small>
                </p>
              </div>
            </div>
            <div className="project-card-body text-center">
              <img className=" img-fluid rounded" src={review2} alt="" />
              <h4 className=" mt-2">
                <span className=" fs-4 fw-bold">Kamal Hamid</span>
              </h4>
              <div className="service-detail">
                <p style={{ color: 'orange' }}>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </p>
                <p>
                  <small>
                    I am a fan of there product and service, there provide most
                    genuine product and good product. service is good.
                  </small>
                </p>
              </div>
            </div>
            <div className="project-card-body text-center">
              <img className=" img-fluid rounded" src={review3} alt="" />
              <h4 className=" mt-2">
                <span className=" fs-4 fw-bold">Alomgir Alom</span>
              </h4>
              <div className="service-detail">
                <p style={{ color: 'orange' }}>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </p>
                <p>
                  <small>
                    I am pretty much happy to take there product and service. I
                    will definitely by there product if i bye next time.
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
