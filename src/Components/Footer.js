import React from 'react'
import { Container } from 'react-bootstrap'
import styles from  '../CSS_modules/Footer.module.css'
// this component used in all pages
const Footer = () => {
  return (
    <div className={styles.footer}>
        <Container>
            <div className={styles.footerTopWrapper}>
                <div className={styles.footerItem}>
                    <h2 className={styles.footerTitle}>
                        inStock
                    </h2>
                </div>
                <div className={styles.footerItem}>
                    <p className={styles.footerAbout}>About Us</p>
                    <p className={styles.footerAbout}>Terms & Condition</p>
                    <p className={styles.footerAbout}>Privacy Policy</p>
                </div>
                <div className={styles.footerItem}>
                    <p className={styles.footerContact}>
                        Contact Us : 11111
                    </p>
                </div>
            </div>
            </Container></div>)
}

export default Footer