import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Routers from "../../router/Routers";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <>
            <Header />
            <Routers />
            <Footer />
        </>
    );
};

export default Layout;
