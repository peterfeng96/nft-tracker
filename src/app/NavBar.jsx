import Link from 'next/link'
import styles from './page.module.css'

export default function NavBar() {
    return (
        <nav>
            <ul className={styles.navList}>
                <img src={'tracker.png'} style={{width:'2.5rem', height: '2.5rem'}}></img>
                <li id={styles.logo}>
                    <Link href='/'>NFT Tracker</Link>
                </li>
                <li>
                    <Link href='/collection'>NFT Collection</Link>
                </li>
            </ul>
        </nav>
    )
}