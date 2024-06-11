import { FunctionComponent } from "react";
import styles from "./FrameA1.module.css";

export type FrameA1Type = {
  className?: string;
};

const FrameA1: FunctionComponent<FrameA1Type> = ({ className = "" }) => {
  return (
    <section className={[styles.frameA, className].join(" ")}>
      <div className={styles.frameB}>
        <div className={styles.rectangleX}>
          <div className={styles.wrapperRectangle1}>
            <img
              className={styles.wrapperRectangle1Child}
              loading="eager"
              alt=""
              src="/rectangle-1.svg"
            />
          </div>
          <div className={styles.frameC}>
            <nav className={styles.homeFrame}>
              <a
                className={styles.home}
                href="https://ahamedjishfaan.me"
                target="_blank"
              >
                Home
              </a>
              <div className={styles.frameD}>
                <a
                  className={styles.about}
                  href="https://ahamedjishfaan.me/about"
                  target="_blank"
                >
                  About
                </a>
              </div>
              <a
                className={styles.login}
                href="https://www.ahamedjishfaan.me/p/about-me.html?m=1"
                target="_blank"
              >
                login
              </a>
              <div className={styles.frameD1}>
                <a
                  className={styles.contact}
                  href="https://www.ahamedjishfaan.me/p/about-me.html?m=1"
                  target="_blank"
                >
                  Contact
                </a>
              </div>
              <a
                className={styles.gallery}
                href="https://www.ahamedjishfaan.me/p/about-me.html?m=1"
                target="_blank"
              >
                Gallery
              </a>
            </nav>
          </div>
          <div className={styles.galleryFrame}>
            <div className={styles.frameF}>
              <div className={styles.line} />
              <a
                className={styles.registerNow}
                href="https://ahamedjishfaan.me"
                target="_blank"
              >
                Register Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameA1;
