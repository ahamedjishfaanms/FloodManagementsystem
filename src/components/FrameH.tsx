import { FunctionComponent } from "react";
import styles from "./FrameH.module.css";

export type FrameHType = {
  className?: string;
};

const FrameH: FunctionComponent<FrameHType> = ({ className = "" }) => {
  return (
    <section className={[styles.frameH, className].join(" ")}>
      <img
        className={styles.rectangleJIcon}
        loading="eager"
        alt=""
        src="/rectangle-4@2x.png"
      />
      <div className={styles.frameI}>
        <div className={styles.frameK}>
          <h2 className={styles.loreIpsum}>Lore Ipsum</h2>
          <div className={styles.loremIpsumLabel}>
            <div
              className={styles.loremIpsumIs}
            >{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but `}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameH;
