import React from 'react'
import styles from '../styles/layouts/Footer.module.css';

function Footer() {
  return (
    <div>
      <footer>
    <header>
      <h2>Developer</h2>
      <p>"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, accusantium?"</p>
      <ul class={styles.icon}>
        <ion-icon class={styles.icon} name="logo-facebook"></ion-icon>
        <ion-icon class={styles.icon} name="logo-instagram"></ion-icon>
        <ion-icon class={styles.icon} name="logo-twitter"></ion-icon>
        <ion-icon class={styles.icon} name="logo-youtube"></ion-icon>
      </ul>
    </header>
    <aside>
      <ul class={styles.category}>
        <li>
          <h3>Project</h3>
        </li>
        <li>Houses</li>
        <li>Rooms</li>
        <li>Flats</li>
        <li>Apartments</li>
      </ul>
      <ul class={styles.category}>
        <li>
          <h3>Company</h3>
        </li>
        <li>Objective</li>
        <li>Capital</li>
        <li>Security</li>
        <li>Selling</li>
      </ul>
      <ul class={styles.category}>
        <li>
          <h3>Movement</h3>
        </li>
        <li>Movement</li>
        <li>Support us</li>
        <li>Pricing</li>
        <li>Renting</li>
      </ul>
      <ul class={styles.category}>
        <li>
          <h3>Help</h3>
        </li>
        <li>Privacy</li>
        <li>Contact</li>
        <li>FAQs</li>
        <li>Blog</li>
      </ul>
    </aside>
  </footer>
    </div>
  );
}

export default Footer;