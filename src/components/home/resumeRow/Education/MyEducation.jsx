import React from 'react';
import styles from '../../../../styles/home/MyEducation.module.css';

function MyEducation({ title , description }) {
  return (
    <div className={styles.education}>
        <h4>{title}</h4>
        <p>{description}</p>
    </div>
  );
}

export default MyEducation;