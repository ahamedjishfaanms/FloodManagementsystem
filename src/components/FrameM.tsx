import { FunctionComponent } from "react";
import styles from "./FrameM.module.css";

export type FrameMType = {
  className?: string;
};

const FrameM: FunctionComponent<FrameMType> = ({ className = "" }) => {
  return (
    <section className={[styles.frameM, className].join(" ")}>
      <div className={styles.rectangleCluster}>
        <div className={styles.rectangleClusterChild} />
        <div className={styles.midframeWrapper}>
          <div className={styles.midframe} />
        </div>
        <div className={styles.rectangleClusterItem} />
      </div>
    </section>
  );
};

export default FrameM;
