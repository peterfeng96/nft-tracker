import Link from "next/link";
import styles from "../app/page.module.css";

export default function NavBar() {
  return (
    <nav>
      <ul className={styles.navList}>
        <img src={"/tracker.png"} width={40} height={40} alt="tracker" />
        <li id={styles.logo}>
          <Link href="/">NFT Tracker</Link>
        </li>
        <li>
          <Link href="/collection">NFT Collection</Link>
        </li>
      </ul>
    </nav>
  );
}
