import React from 'react';
import { Col, Container, Row } from "reactstrap";
import maleTourist from "../assets/images/male-tourist.png";
import "./newsletter.css";

const Newsletter = () => {
    return(
        <section className="newsletter">
            <Container>
                <Row>
                    <Col lg="6">
                        <div className="newsletter__content">
                            <h2>Subscribe now for smarter and hassle-free travels!</h2>

                            <div className="newsletter__input">
                                <input type="email" placeholder="Enter your email" />
                                <button className="btn newsletter__btn">Subscribe</button>
                            </div>

                            <p>
                                Join our community of travelers and stay updated with
                                latest tips, exclusive offers, and exciting travel destinations.
                                Don't miss out on your next adventure!
                            </p>
                        </div>
                    </Col>
                    <Col lg="6">
                        <div className="newsletter__img">
                            <img src={maleTourist} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Newsletter