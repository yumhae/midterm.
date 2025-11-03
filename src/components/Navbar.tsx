import React, { useState } from 'react';
import styles from '../styles/Navbar.module.css';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.logo}>Clariz Joy</div>
        <div className={styles.hamburger} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`${styles.navMenu} ${isMenuOpen ? styles.active : ''}`}>
          <li><a onClick={() => scrollToSection('home')}>Home</a></li>
          <li><a onClick={() => scrollToSection('about')}>About</a></li>
          <li><a onClick={() => scrollToSection('projects')}>Projects</a></li>
          <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
        </ul>
          {/* overlay shown when mobile menu is open; clicking it closes the menu */}
          <div
            className={`${styles.overlay} ${isMenuOpen ? styles.show : ''}`}
            onClick={toggleMenu}
          />
      </div>
    </nav>
  );
};

export default Navbar;