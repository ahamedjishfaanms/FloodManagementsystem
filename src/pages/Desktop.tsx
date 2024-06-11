import { FunctionComponent } from "react";
import FrameA1 from "../components/FrameA1";
import FrameH from "../components/FrameH";
import FrameM from "../components/FrameM";
import FRAMEA from "../components/FRAMEA";
import styles from "./Desktop.module.css";

const Desktop: FunctionComponent = () => {
  return (
    <div className={styles.desktop1}>
      <FrameA1 />
      <FrameH />
      <FrameM />
      <footer className={styles.additionalFrameWrapper}>
        <FRAMEA />
      </footer>
    </div>
  );
};

export default Desktop;
