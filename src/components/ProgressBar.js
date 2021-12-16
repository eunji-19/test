import React from "react";
import styles from "./ProgressBar.module.css";

const ProgressBar = ({ percent }) => {
  return (
    <div className={styles.progressBar}>
      <div style={{ width: `${percent}%` }}>{percent}%</div>
    </div>
  );
};

export default ProgressBar;
