import Images from "./Images";
import Marquee from "react-fast-marquee";
import styles from '../app/styles/page.module.css'

function OurClient() {
    const { Logos1, Logos2 } = Images;
    return (
        <div className={styles.logos} style={{ textAlign: 'center', marginTop: 150, marginBottom: 150 }}>
            <span className="header">Our Client</span>
            <Marquee speed={250} direction="right" autoFill={false}>
                {Logos1.map((image) => (
                    <img src={image.src} alt={image.alt} key={image.id}/>
                ))}
            </Marquee>

            <Marquee speed={250} direction="left" autoFill={false} >
                {Logos2.map((image) => (
                    <img src={image.src} alt={image.alt} key={image.id}/>
                ))}
            </Marquee>

        </div>
    )
}
export default OurClient;