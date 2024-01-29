import React from "react";
import styles from "../../styles/layouts/Navbar.module.css";

function NavbarImage({ animationClassName }) {
  return (
    <div
      className={`${animationClassName} ${styles.personImageContainer} navImage`}
    >
      <img
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHVzZXJzfGVufDB8fDB8fHww"
        alt="user"
      />
    </div>
  );
}

export default NavbarImage;
