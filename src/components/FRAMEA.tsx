import { FunctionComponent } from "react";
import styles from "./FRAMEA.module.css";

export type FRAMEAType = {
  className?: string;
};

const FRAMEA: FunctionComponent<FRAMEAType> = ({ className = "" }) => {
  return (
    <div className={[styles.additionalFrame, className].join(" ")}>
      <div className={styles.nestedShapes} />
    </div>
  );
};

export default FRAMEA;
