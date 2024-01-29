import React from 'react';
import styles from '../../../styles/home/FreeLancer.module.css';

function FreeLancer() {
  return (
    <div className={styles.overlay}>
    <div className={styles.freelancer}>
        <p>I Am Available For FreeLance</p>
        <button>Hire me</button>
    </div>
    </div>
  );
}

export default FreeLancer;