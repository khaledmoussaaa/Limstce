"use client"
import Link from "next/link";
import Images from "./Images";
import { useRef, useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import styles from '../app/styles/page.module.css'

function OurWork() {
    const { Covers } = Images;
    const carsouelRef = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        if (carsouelRef.current) {
            setWidth(carsouelRef.current.scrollWidth - carsouelRef.current.offsetWidth);
        }
    }, []);

    const scrollLeft = () => {
        if (carsouelRef.current) {
            carsouelRef.current.scrollBy({ left: -500, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (carsouelRef.current) {
            carsouelRef.current.scrollBy({ left: 500, behavior: "smooth" });
        }
    };
    return <>
        <div id="OurWork-component" className={styles.ourWork}>
            <div className={styles.leftSide}>
                <h1>Our Portfolio</h1>
                <div className={styles.buttonsContainer}>
                    <button className={styles.scrollButton} onClick={scrollLeft}>
                        <FontAwesomeIcon icon={faCircleArrowLeft} className="fa-icon" />
                    </button>
                    <button className={styles.scrollButton} onClick={scrollRight}>
                        <FontAwesomeIcon icon={faCircleArrowRight} className="fa-icon" />
                    </button>
                </div>
            </div>
            <div className={styles.rightSide}>
                <span className="header">EXPLORE OUR <br /> DIGITAL SHOWCASE</span>
                <motion.div ref={carsouelRef} className="carsouel" whileTap={{cursor:'grabbing'}}>
                    <motion.div drag="x" dragConstraints={{ right: 0, left: -width }} className="inner-carsouel">
                        {Covers.map((image) => (
                            <motion.div className="item" key={image.id}>
                                <Link href={`/Projects?id=${image.id}`}>
                                    <div>
                                        <img src={image.src} alt={image.alt} />
                                        <span className="title" style={{fontSize: 22}}>{image.alt} <br /></span>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </div>
    </>;
}

export default OurWork;