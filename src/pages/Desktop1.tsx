import { FunctionComponent } from "react";
import styles from "./Desktop1.module.css";

const Desktop: FunctionComponent = () => {
  return (
    <div className={styles.desktop19}>
      <header className={styles.floodhelpParent}>
        <b className={styles.floodhelp}>Floodhelp</b>
        <div className={styles.homeFloodRegionHelpWrapper}>
          <b className={styles.homeFloodRegion}>Home Flood Region Help</b>
        </div>
      </header>
      <div className={styles.searchFloodEffect}>Search Flood effect Area</div>
      <main className={styles.shapeContainer}>
        <section className={styles.shapeContainerChild} />
        <img
          className={styles.shapeContainerItem}
          loading="lazy"
          alt=""
          src="/ellipse-1.svg"
        />
        <img
          className={styles.shapeContainerInner}
          alt=""
          src="/rectangle-2.svg"
        />
        <img
          className={styles.image1Icon}
          loading="lazy"
          alt=""
          src="/image-1@2x.png"
        />
        <img className={styles.ellipseIcon} alt="" src="/ellipse-2@2x.png" />
      </main>
    </div>
  );
};

export default Desktop;
