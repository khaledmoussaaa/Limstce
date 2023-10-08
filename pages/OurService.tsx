import styles from '../app/styles/page.module.css'

function OurService() {
    return (
        <>
            <div id='ourService-component' className={styles.OurService}>
                <div className={styles.leftSide}>
                    <h1>Our Service</h1>
                </div>

                <div className={styles.rightSide}>
                    <h1 className='header'>ELEVATING BRANDS WITH <br /> 
                    OUR COMPREHENSIVE <br /> 
                    SERVICES
                    </h1>
                    <div className={styles.service}>
                        <span>
                            Logo, Brand <br />
                            Guidelines, Stationary
                        </span>
                        <h1 className="subHeader">BRANDING</h1>
                    </div>
                    <hr />
                    <div className={styles.service}>
                        <span>
                            Website, Mobile <br />
                            and Dashboard Design
                        </span>
                        <h1 className="subHeader">UI/UX</h1>
                    </div>
                    <hr />
                    <div className={styles.service}>
                        <span>
                            Web Development,<br />
                            Mobile app Development<br />
                            and Testing
                        </span>
                        <h1 className="subHeader">DEVELOPMENT</h1>
                    </div>
                    <hr />
                    <div className={styles.service}>
                        <span>
                            Social media Marketing,<br />
                            Media Buying and<br />
                            Management
                        </span>
                        <h1 className="subHeader">DIGITAL MARKETING</h1>
                    </div>
                    <hr />
                    <div className={styles.service}>
                        <span>
                            Sound Engineering, Mixing<br />
                            & Mastering, Music Production<br />
                            and Voiceover
                        </span>
                        <h1 className="subHeader">AUDIO SERVICES</h1>
                    </div>
                    <hr />
                </div>
            </div>
        </>
    );
}

export default OurService;