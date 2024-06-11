import { FunctionComponent } from "react";
import styles from "./TypeCloselyMatchTheOrigin.module.css";

const TypeCloselyMatchTheOrigin: FunctionComponent = () => {
  return (
    <div className={styles.typeCloselyMatchTheOrigin}>
      <img
        className={styles.typeCloselyMatchTheOriginChild}
        alt=""
        src="/rectangle-6@2x.png"
      />
      <div className={styles.username}>Username</div>
      <div className={styles.typeCloselyMatchTheOriginItem} />
      <div className={styles.password}>Password</div>
      <div className={styles.loginWithFb}>Login with FB account.</div>
      <main className={styles.passwordInput}>
        <input className={styles.learn} type="text" />
        <input className={styles.ng} type="text" />
        <img
          className={styles.passwordInputChild}
          loading="eager"
          alt=""
          src="/rectangle-5@2x.png"
        />
      </main>
      <div className={styles.lllll}>lllll</div>
    </div>
  );
};

export default TypeCloselyMatchTheOrigin;
