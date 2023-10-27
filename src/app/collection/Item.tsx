import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Item(props: any) {
  const { contractAddress, contractName, floorPrice, name, tokenId, url } =
    props.metadata;
  return (
    <div className={styles.item}>
      <Image src={url} alt="No Image" width={200} height={200} />
      <Link
        href={`https://opensea.io/assets/ethereum/${contractAddress}/${tokenId}`}
        target="_blank"
      >
        {name || `${contractName} #${tokenId}`}
      </Link>
      <div style={{ width: "100%", margin: "1rem 0 0 0" }}>
        <Link
          href={`https://opensea.io/assets/ethereum/${contractAddress}`}
          target="_blank"
          style={{ fontWeight: "900" }}
        >
          {contractName}
        </Link>
        <p>Floor price: {floorPrice || 0} ETH</p>
      </div>
    </div>
  );
}
