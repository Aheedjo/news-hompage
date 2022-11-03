import { useState } from "react";
import styles from "../styles/HeroContent.module.scss";
import DesktopImg from "../public/images/image-web-3-desktop.jpg";
import MobileImg from "../public/images/image-web-3-mobile.jpg";
import Image from "next/image";
import { datta, neww } from "../data";

const HeroContent = () => {
    return (
        <section>
            <div className={styles.top}>
                <div className={styles.left}>
                    <div className={styles.image}></div>
                    <div className={styles.text}>
                        <h1>The Bright Future of Web 3.0?</h1>
                        <div>
                            <p>
                                We dive into the next evolution of the web that
                                claims to put the power of the platforms back
                                into the hands of the people. But is it really
                                fulfilling its promise?
                            </p>
                            <button className={styles.btn}>read more</button>
                        </div>
                    </div>
                </div>
                <div className={styles.newCont}>
                    <h2>New</h2>
                    {neww.map((data, i) => {
                        const { header, text } = data;
                        return (
                            <div key={i}>
                                <h3>{header}</h3>
                                <p>{text}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className={styles.gridCont}>
                {datta.map((data, i) => {
                    const { image, id, header, text } = data;
                    return (
                        <div key={i} className={styles.item}>
                            <Image
                                src={image}
                                alt="image"
                                className={styles.image}
                            />
                            <div>
                                <p className={styles.number}>{id}</p>
                                <h4 className={styles.header}>{header}</h4>
                                <p className={styles.text}>{text}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default HeroContent;
