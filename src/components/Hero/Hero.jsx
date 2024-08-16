import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Pugazhenthi S</h1>
        <p className={styles.description}>
        Aspiring MERN and MEFN developer. I am enthusiastic about creating dynamic and responsive web applications that provide seamless user experiences.
        </p>
      
        
      
       
       
      </div>
      <img
        src={getImageUrl("hero/pugazh.jfif")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
