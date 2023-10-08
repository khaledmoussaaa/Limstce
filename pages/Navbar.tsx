'use client';
import Link from 'next/link';
import navigate from './Functions';
import { useRef, useState } from 'react';
import styles from '../app/styles/page.module.css';

interface NavbarProps {
    isActive: boolean;
    handleClick: () => void;
    text: string;
    text2: string;
    text3: string;
}

function Navbar({ isActive, handleClick, text, text2, text3 }: NavbarProps) {
    const navBar = useRef<HTMLUListElement>(null);
    const [toggleChecked, setToggleChecked] = useState(false);

    const handleLiClick = () => {
        setToggleChecked(false);
        handleClick();
    };

    return (
        <>
            <div className={`${styles.navbar} ${isActive ? styles.nav : ''}`}>
                <Link href={'/'}>
                    <img src="/Images/Logos/Limstce Logo.svg" alt="" />
                </Link>

                <ul ref={navBar} className={`${"ul"} ${styles.ul} ${isActive ? styles.show : ''}`}>
                    <li onClick={handleLiClick}>{text === 'Home' ? (
                        <Link href="/">
                            <span>Home</span>
                        </Link>
                    ) : (
                        <span onClick={() => navigate('about-component')}>{text}</span>
                    )}</li>


                    <li onClick={handleLiClick}>{text2 === 'Our Service' ? (
                        <span onClick={() => navigate('ourService-component')}>{text2}</span>
                    ) : (
                        <span onClick={() => navigate('footer-component')}>{text2}</span>
                    )}</li>

                    <li onClick={handleLiClick}><span onClick={() => navigate('footer-component')}>{text3}</span></li>
                </ul>

                <div className={`${styles.toggleShow}`}>
                    <input type="checkbox" id="checkbox" checked={toggleChecked} onChange={() => setToggleChecked(!toggleChecked)} />
                    <label htmlFor="checkbox" className='toggle' onClick={handleClick}>
                        <div className='bars' id="bar1"></div>
                        <div className='bars' id="bar2"></div>
                        <div className='bars' id="bar3"></div>
                    </label>
                </div>
            </div>
        </>
    );
}

export default Navbar;