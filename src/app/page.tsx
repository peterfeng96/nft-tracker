'use client'

import styles from './page.module.css'
import { useEffect, useState } from 'react'

export default function Home() {

  const [eth, setEth] = useState<any>(null)

  useEffect(() => {
    fetch('https://pms5jhuib7.execute-api.us-east-2.amazonaws.com/dev/gas')
      .then(res => res.json())
      .then(data => {
      const {ethPrice:{ethbtc, ethusd}} = data;
      setEth({ethbtc, ethusd});
      }
    )

    const getEthPrice = setInterval(() => {
      console.log('in here')
      fetch('https://pms5jhuib7.execute-api.us-east-2.amazonaws.com/dev/gas')
        .then(res => res.json())
        .then(data => {
        const {ethPrice:{ethbtc, ethusd}} = data;
        setEth({ethbtc, ethusd});
        })
    }, 60000)

    return () => clearInterval(getEthPrice);
  }, []) 

  return (
    <main className={styles.main}>
      <div className={styles.ethContainer}>
        <div className={styles.ethIcon}>
          <img src='eth.png' style={{width:'24px', height: '24px'}}></img>
          Ethereum
        </div>
        {eth ? <div>${Number(eth.ethusd).toFixed(2)}</div> : null}
        {eth ? <div>{Number(eth.ethbtc).toFixed(6)} BTC</div> : null}
      </div>
      <div className={styles.gasContainer}>
        Gas Estimator
        <iframe className="gas-cards-iframe" src="https://www.blocknative.com/gas-iframe" style={{width: '60%', minWidth: '600px', height: '500px', display:'block', border: '3px solid #54317a', borderRadius: '10px'}} scrolling='no'></iframe>
      </div>
    </main>
  )
}
