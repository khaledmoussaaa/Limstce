"use client"
import Navbar from "./Navbar";
import About from "./About";
import OurWork from "./OurWork";
import OurService from "./OurService";
import OurClient from "./OurClient";
import Footer from "./Footer";
import styles from '../app/styles/page.module.css';
import { useRef, useState } from "react";

function Launch() {
    const [isActive, setIsActive] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const Nav = useRef<HTMLDivElement>(null);
    const handleClick = () => {
        if (containerRef.current) {
            containerRef.current.classList.toggle('active');
            Nav.current?.classList.toggle('nav');
            setIsActive(!isActive);
        }
    };

    return (
        <>
            <Navbar isActive={isActive} handleClick={handleClick} text={'About Us'} text2={'Our Service'} text3={'Contact'} />
            <div ref={containerRef} className={`${styles.container} ${isActive ? styles.active : ''}`}>
                <About />
                <hr />
                <OurWork />
                <hr />
                <OurService />
                <hr />
                <OurClient />
                <Footer />
            </div>
        </>
    );
}
export default Launch;