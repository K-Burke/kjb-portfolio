import Head from 'next/head' 
import Link from 'next/link'
import { useState, useEffect } from 'react'
import styles from '../styles/Nav.module.css'

const Nav = () => {

    const [open, toggleOpen] = useState(false);
    var btnStyle = styles.closed;
    useEffect(() => {
        if(open){btnStyle = styles.open}
        else {btnStyle = styles.closed}
    }, [open]);

    return (
        <>
            <Head>
                <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"/>
            </Head>

            <nav className={styles.nav}>
                <ul>
                    <li>
                        <Link className={styles.navLink} href='/'>
                            <ion-icon name="home"></ion-icon>
                        </Link>
                    </li>
                    <li>
                        <Link className={styles.navLink} href='/about'>About</Link>
                    </li>
                    <li>
                        <Link className={styles.navLink} href='/projects'>Projects</Link>
                    </li>
                    <li>
                        <Link className={styles.navLink} href='/contact'>Contact</Link>
                    </li>
                    <li>
                        <Link className={styles.navLink} href='/donate'>Donate</Link>
                    </li>
                    <li>
                        <button onClick={toggleOpen(!open)} className={btnStyle}>
                            <span className={styles.top}></span>
                            <span className={styles.middle}></span>
                            <span className={styles.bottom}></span>
                        </button>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Nav