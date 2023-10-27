"use client";
import { useEffect, useState } from "react";

import styles from "./page.module.css";

import { getEthPrice, getEthGas } from "@/utils/gas";

import Card from "./components/Card";
import Graph from "./components/Graph";

export default function Home() {
  const [ethPrice, setEthPrice] = useState<number>(0);
  const [ethGas, setEthGas] = useState<any>(null);

  useEffect(() => {
    //CALLED INSTANTLY
    (async () => {
      let x = await getEthPrice();
      let y = await getEthGas();
      setEthPrice(x);
      setEthGas(y);
    })();
    //CALLED EVERY 60 SECONDS
    const ethInterval = setInterval(async () => {
      let x = await getEthPrice();
      let y = await getEthGas();
      setEthPrice(x);
      setEthGas(y);
    }, 60000);

    return () => clearInterval(ethInterval);
  }, []);

  return (
    <main className={styles.main}>
      {ethPrice ? (
        <div className={styles.home}>
          <h1>Ethereum Gas Tracker</h1>
          <div className={styles.cardContainer}>
            <Card
              title="Ethereum Price"
              keys={["USD"]}
              values={[ethPrice.toFixed(2)]}
            />
            <Card
              title="Current Gas Price"
              keys={["Gwei"]}
              values={[ethGas.gasPrice.toFixed(2)]}
            />

            <Card
              title="Avg Gas Price(Last Hour)"
              keys={["Gwei"]}
              values={[ethGas.history.average.toFixed(2)]}
            />
          </div>
          <div className={styles.graphContainer} style={{ width: "100%" }}>
            <h2>Median Gas Prices(Last Hour)</h2>
            <Graph
              oldestBlock={ethGas.history.oldestBlock}
              base={ethGas.history.base}
              priority={ethGas.history.priority}
            />
          </div>
          <h2>What is Gas?</h2>
          <br></br>
          <p>
            Gas serves as a unit of measurement for the amount of computational
            work required for a specific operation. For example, a standard ETH
            transfer requires 21,000 gas. Gas price is how much must be paid per
            unit of gas, and is typically represented in Gwei (1-billionth of an
            ETH). Using these two together provide you with the total gas fee
            required for an Ethereum transaction.
          </p>
          <br></br>
          <p>
            Gas price is broken up into two parts, the base fee and the priority
            fee. When a blockchain is extremely active, many users have to bid
            with higher gas prices by increasing their priority fee to make sure
            their transactions go through on time. The base fee is automatically
            adjusted by the blockchain depending on the current demand as well.
          </p>
          <br></br>
          <h2>How much will my transaction cost?</h2>
          <br></br>
          <p>
            It really depends on the current gas price as well as the kind of
            transaction you are making.
          </p>
          <br></br>
          <p>
            At current gas prices, a standard ETH transfer requiring 21,000 gas
            will cost you: {(21000 * ethGas.gasPrice) / 1000000000} ETH or{" $"}
            {((21000 * ethGas.gasPrice * ethPrice) / 1000000000).toFixed(2)}
          </p>
        </div>
      ) : null}
    </main>
  );
}
