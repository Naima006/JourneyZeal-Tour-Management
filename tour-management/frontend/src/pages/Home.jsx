import React from "react";
import { Col, Container, Row } from "reactstrap";
import experienceImg from "../assets/images/experience.png";
import heroImg from "../assets/images/hero-img01.jpg";
import heroImg02 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import worldImg from "../assets/images/world.png";

import "../styles/home.css";
import Subtitle from "./../shared/Subtitle";

import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
import MasonryImagesGallery from "../components/Image-gallery/MasonryImagesGallery";
import Testimonials from "../components/Testimonial/Testimonials";
import ServiceList from "../services/ServiceList";
import Newsletter from "../shared/Newsletter";
import SearchBar from "../shared/SearchBar";

const Home = () => {
    return (
        <>
            {/*============ hero section start ===========*/}
            <section>
                <Container>
                    <Row>
                        <Col lg="6">
                            <div className="hero__content">
                                    <div className="hero__subtitle d-flex align-items-center ">
                                        <Subtitle subtitle={"Know Before You Go"} />
                                        <img src={worldImg} alt="" />
                                    </div>
                                    <h1>
                                        Traveling opens the door to create{" "}
                                        <span className="highlight">memories</span>
                                    </h1>
                                    <p>
                                        Unlock the world and embark on unforgettable journeys!
                                        Whether you're seeking adventure, relaxation, or the thrill of
                                        discovering new cultures, our tours are crafted to help you
                                        create everlasting memories. Let us guide you to breathtaking destinations,
                                        with expert tips and seamless travel experiences tailored just for you.
                                        Start your adventure today and explore the wonders that await!
                                    </p>
                            </div>
                        </Col>
                        <Col lg="2">
                            <div className="hero__img-box">
                                <img src= {heroImg} alt="" />
                            </div>
                        </Col>
                        <Col lg="2">
                            <div className="hero__img-box hero__video-box mt-4">
                                <video src={heroVideo} alt="" controls/>
                            </div>
                        </Col>
                        <Col lg="2">
                            <div className="hero__img-box mt-5">
                                <img src={heroImg02} alt="" />
                            </div>
                        </Col>

                        <SearchBar />
                    </Row>
                </Container>
            </section>
            {/*============ hero section end ===========*/}
            <section>
                <Container>
                    <Row>
                        <Col lg="3">
                            <h5 className="services__subtitle">What we serve</h5>
                            <h2 className="services__title">We offer our best services</h2>
                        </Col>
                        <ServiceList/>
                    </Row>
                </Container >
            </section>

            {/*============ featured tour section start ===========*/}
            <section>
                <Container>
                    <Row>
                        <Col lg="12" className="mb-5">
                            <Subtitle subtitle={"Explore"}/>
                            <h2 className="featured__tour-title">Our featured tours</h2>
                        </Col>
                        <FeaturedTourList/>
                    </Row>
                </Container>
            </section>
            {/*============ featured tour section end ===========*/}

            {/*============ experience section start ===========*/}
            <section>
                <Container>
                    <Row>
                        <Col lg="6">
                            <div className="experience__content">
                                <Subtitle subtitle={"Experience"}/>
                                <h2>
                                    With all our experiences <br /> we shall serve you
                                </h2>
                                <p>
                                    We pride ourselves on crafting unforgettable journeys that cater to your unique desires and interests. 
                                    <br />
                                    Our dedicated team has years of experience in providing exceptional service, ensuring that every aspect of your trip is memorable and tailored just for you. 
                                    Let us turn your travel dreams into reality!
                                </p>
                            </div>

                            <div className="counter__wrapper d-flex align-items-center gap-5">
                                <div className="counter__box">
                                    <span>12k+</span>
                                    <h6>Succesful trip</h6>
                                </div>
                                <div className="counter__box">
                                    <span>2k+</span>
                                    <h6>Regular clients</h6>
                                </div>
                                <div className="counter__box">
                                    <span>15</span>
                                    <h6>Years experience</h6>
                                </div>
                            </div>
                        </Col>
                            
                        <Col lg="6">
                            <div className="experience__img">
                                <img src={experienceImg} alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/*============ experience section end ===========*/}

            {/*============ gallery section start ===========*/}
            <section>
                <Container>
                    <Row>
                        <Col lg="12">
                            <Subtitle subtitle={"Gallery"}/>
                            <h2 className="gallery__title">
                                Visit our customers tour gallery
                            </h2>
                        </Col>
                        <Col lg="12">
                            <MasonryImagesGallery/>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/*============ gallery section end ===========*/}

            {/*============ testimonial section start ===========*/}
            <section>
                <Container>
                    <Row>
                        <Col lg="12">
                            <Subtitle subtitle={"Fans Love"}/>
                            <h2 className="testimonial__title">What our fans say about us</h2>
                        </Col>
                        <Col lg="12">
                            <Testimonials/>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/*============ testimonial section end ===========*/}
            <Newsletter/>
        </>
    );
};

export default Home;