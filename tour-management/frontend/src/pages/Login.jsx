import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Col, Container, Form, FormGroup, Row } from "reactstrap";
import "../styles/login.css";

import loginImg from "../assets/images/login.png";
import userIcon from "../assets/images/user.png";

import { AuthContext } from "./../context/AuthContext";
import { BASE_URL } from "./../utils/config";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined,
  });

  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const allowedDomains = ["gmail.com", "outlook.com", "yahoo.com"];
  
  const handleChange = (e) => {
    const { id, value } = e.target;
    setCredentials((prev) => ({ ...prev, [id]: value }));
  };
  
  const handleClick = async (e) => {
    e.preventDefault();
    
    const emailDomain = credentials.email.split("@")[1];
    if (emailDomain && !allowedDomains.includes(emailDomain)) {
      alert("Please use a valid email address with one of the following domains: @gmail.com, @outlook.com, or @yahoo.com.");
      return;
    }

    dispatch({ type: "LOGIN_START" });
    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(credentials),
      });
  
      const result = await res.json();
      if (!res.ok) alert(result.message);
  
      dispatch({ type: "LOGIN_SUCCESS", payload: result.data });
      navigate("/");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.message });
    }
  };
  

  return (
    <section>
      <Container>
        <Row>
          <Col lg="8" className="m-auto">
            <div className="login__container d-flex justify-content-between">
              <div className="login__img">
                <img src={loginImg} alt="" />
              </div>

              <div className="login__form">
                <div className="user">
                  <img src={userIcon} alt="" />
                </div>
                <h2>Login</h2>

                <Form onSubmit={handleClick}>
                  <FormGroup>
                    <input
                      type="email"
                      placeholder="Email"
                      required
                      id="email"
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="password"
                      placeholder="Password"
                      required
                      id="password"
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <Button
                    className="btn secondary__btn auth__btn"
                    type="submit"
                  >
                    Login
                  </Button>
                </Form>
                <p>
                  Don't have an account? <Link to="/register">Register</Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Login;
