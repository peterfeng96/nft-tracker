import Link from 'next/link'
import Image from 'next/image'
import styles from '../page.module.css'

export default function NavBar() {
    return (
        <nav>
            <ul className={styles.navList}>
                <Image src={'/tracker.png'} width={40} height={40} alt='tracker'/>
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