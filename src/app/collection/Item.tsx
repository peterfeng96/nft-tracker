import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { ItemProps } from "../types";

export default function Item({
  metadata: { contractAddress, contractName, floorPrice, name, tokenId, url },
}: ItemProps) {
  return (
    <div className={styles.item}>
      <Image src={url} alt="No Image" width={200} height={200} />
      <Link
        href={`https://opensea.io/assets/ethereum/${contractAddress}/${tokenId}`}
        target="_blank"
      >
        {name || `${contractName} #${tokenId}`}
      </Link>
      <div style={{ width: "100%" }}>
        <Link
          href={`https://opensea.io/assets/ethereum/${contractAddress}`}
          target="_blank"
        >
          {contractName}
        </Link>
        <p>Floor price: {floorPrice || 0} ETH</p>
      </div>
    </div>
  );
}
