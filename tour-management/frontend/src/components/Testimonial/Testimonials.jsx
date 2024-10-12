import React from "react";
import Slider from "react-slick";
import ava01 from "../../assets/images/ava-1.jpg";
import ava02 from "../../assets/images/ava-2.jpg";
import ava03 from "../../assets/images/ava-3.jpg";
import ava04 from "../../assets/images/ava-4.jpg";

const Testimonials = () => {
    
    const settings={
        dots:true,
        infinite:true,
        autoplay:true,
        speed:1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slidesToShow:3,
        
        responsive:[
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ]
    }
    return (
        <Slider{...settings}>
            <div className="testimonial py-4 px-3">
                <p>
                    "I had an incredible experience with this service!
                    Every detail was thoughtfully planned, and I felt valued as a customer.
                    I can't wait to book my next adventure!"
                </p>

                <div className="d-flex align-items-center gap-4 mt-3">
                    <img src={ava01} className="w-25 h-25 rounded-2" alt="" />
                    <div>
                        <h6 className="mb-0 mt-3">John Doe</h6>
                    </div>
                </div>
            </div>

            <div className="testimonial py-4 px-3">
                <p>
                    "All aspects of the tour was well-organized and fun.
                    I felt like a VIP from start to finish. Thank you for
                    creating such beautiful memories."
                </p>
                <div className="d-flex align-items-center gap-4 mt-3">
                    <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
                    <div>
                        <h6 className="mb-0 mt-3">Emily Johnson</h6>
                    </div>
                </div>
            </div>

            <div className="testimonial py-4 px-3">
                <p>
                    "Amazing service! The team went above and beyond to make my trip unforgettable.
                    I can't thank them enough for the fantastic memories!"
                </p>
                <div className="d-flex align-items-center gap-4 mt-3">
                    <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
                    <div>
                        <h6 className="mb-0 mt-3">Michael Smith</h6>
                    </div>
                </div>
            </div>

            <div className="testimonial py-4 px-3">
                <p>
                    "This company exceeded my expectations, from the booking process to the actual tour,
                    everything was seamless and enjoyable. Highly recommended."
                </p>
                <div className="d-flex align-items-center gap-4 mt-3">
                    <img src={ava04} className="w-25 h-25 rounded-2" alt="" />
                    <div>
                        <h6 className="mb-0 mt-3">Jessica Miller</h6>
                    </div>
                </div>
            </div>
        </Slider>
    )
}

export default Testimonials