import { useState, useEffect, useRef } from 'react';
import Images from './Images';
import styles from '../app/styles/page.module.css';
import '../app/styles/globals.css';
import { useRouter } from 'next/router';
import Loading from './Loading';
import Navbar from './Navbar';
import Footer from './Footer';

function Projects() {
  const { Projects } = Images;
  const router = useRouter();
  const { id } = router.query;
  const image = Projects.find((img) => img.id === Number(id));
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const handleClick = () => {
    if (containerRef.current) {
      containerRef.current.classList.toggle('active');
      setIsActive(!isActive);
    }
  };

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setLoading(false);
    };
    img.onerror = () => {
      setError(true);
      setLoading(false);
    };
    if (image)
      img.src = image.src;
  }, [image]);

  if (loading) {
    return (
      <>
        <Navbar isActive={isActive} text={'Home'} text2={'Contact'} text3={''} handleClick={handleClick} />
        <Loading />
      </>
    )
  }

  if (error || !image) {
    return (
      <>
        <Navbar isActive={isActive} text={'Home'} text2={'Contact'} text3={''} handleClick={handleClick} /><div className={styles.loading}>
          <h1 className='header' style={{ fontSize: 40 }}>Something went wrong, please try again</h1>
        </div>
      </>
    )

  }

  return (
    <>
      <Navbar isActive={isActive} text={'Home'} text2={'Contact'} text3={''} handleClick={handleClick}></Navbar>
      <div ref={containerRef} className={`${styles.container} ${isActive ? styles.active : ''}`}>
        <div className={styles.projects}>
          <h1 className="title">
            {image.title} <br />
          </h1>
          <h2 className="description">
            {image.description[0]}
            <br />
            {image.description[1]}
          </h2>
          <img src={image.src} alt={image.alt} key={image.id} style={{ display: 'block' }} className={styles.project} />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Projects;
