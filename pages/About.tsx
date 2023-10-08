
'use client';
import { faCircleArrowDown, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../app/styles/page.module.css'

function About() {
    const handleClick = () => {
        const secondComponent = document.getElementById('OurWork-component');
        if (secondComponent) {
            const { top } = secondComponent.getBoundingClientRect();
            window.scrollTo({ top: window.pageYOffset + top, behavior: 'smooth' });
        }
    };

    return (
        <div className={styles.about}>
            <div className={styles.rightAbout}>
                <img src="/Images/Text/Header 1.svg" alt="" className='image' />
                <button className='scrollButton' onClick={handleClick}>
                    <FontAwesomeIcon icon={faCircleArrowDown} className="fa-icon iconDown" />
                </button>
            </div>
            <div>
                <img src="/Images/Backgrounds/Background 1.svg" alt="" className='background' />
            </div>
            <div id='about-component' className={styles.aboutLimscte} >
                <p>
                    With more than 10 years of experience in marketing and business solutions
                    feilds, finally our innovative/creative team gathered under one umbrella to
                    bring you extraordinary solutions with reasonable pricing.
                </p>
                <p>
                    During our journey weVe dealt with various mega corporates and individuals as
                    well, with 950/0+ client satisfaction rate and 920/0+ client retention rate assuring
                    our effective client relationship management and flexibility.</p>
                <p>
                    You&rsquo;re few steps away from transforming your ideas into stunning reality. <br />
                    just let&rsquo;s connect!
                </p>
            </div>
        </div>
    )
}
export default About;