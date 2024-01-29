import React from 'react';
import styles from '../../../../styles/home/MyExperience.module.css';

function MyExperience({ title , description }) {

  return (
    <div className={styles.experience}>
        <h4>{title}</h4>
        <p>{description}</p>
    </div>
  );
}

export default MyExperience;