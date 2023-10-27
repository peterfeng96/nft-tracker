"use client";

import styles from "./page.module.css";
import { useEffect, useState } from "react";
import Image from "next/image";

import { getEthPrice, getEthGas } from "@/utils/gas";
import Card from "./components/Card";
import Graph from "./components/Graph";

export default function Home() {
  const [ethPrice, setEthPrice] = useState<number>(0);
  const [ethGas, setEthGas] = useState<any>(null);
  // const [oldestBlock, setOldestBlock] = useState<number>(0);
  // const [average, setAverage] = useState<number>(0);
  // const [base, setBase] = useState<number[]>([]);
  // const [priority, setPriority] = useState<number[]>([]);

  useEffect(() => {
    (async () => {
      let x = await getEthPrice();
      let y = await getEthGas();
      setEthPrice(x);
      setEthGas(y);
      // setOldestBlock(y.history.oldestBlock);
      // setAverage(y.history.average);
      // setBase(y.history.base);
      // setPriority(y.history.priority);
    })();

    const ethInterval = setInterval(async () => {
      let x = await getEthPrice();
      let y = await getEthGas();
      setEthPrice(x);
      setEthGas(y);
      // setOldestBlock(y.history.oldestBlock);
      // setAverage(y.history.average);
      // setBase(y.history.base);
      // setPriority(y.history.priority);
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
              title="Current Gas"
              keys={["Gwei"]}
              values={[ethGas.gasPrice.toFixed(2)]}
            />

            <Card
              title="Avg Gas(Last Hour)"
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
        </div>
      ) : null}
    </main>
  );
}
