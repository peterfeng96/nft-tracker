'use client'
import { useEffect, useState, useRef } from 'react'
import Item from './Item'
import styles from './page.module.css'

export default function Collection() {
    const [totalCount, setTotalCount] = useState(0);
    const [ethBalance, setEthBalance] = useState(0);
    const [nftList, setNftList] = useState<any>([]);
    const [currentPage, setPage] = useState(0);
    const [address, setAddress] = useState(null);
    const inputRef = useRef<any>()

    const url = 'https://pms5jhuib7.execute-api.us-east-2.amazonaws.com/dev'

    function getNFTs(event:any) {
        event.preventDefault();
        fetch(`${url}?address=${inputRef.current?.value}`)
        .then(res => res.json())
        .then(data => {
            setTotalCount(data.nftList.length);
            setEthBalance(data.ethBalance);
            setNftList(data.nftList);
            setAddress(inputRef.current.value);
            inputRef.current.value = '';
        })
    }

    function changePage(direction: 'left' | 'right') {
        const maxPage = Math.floor((nftList.length-1)/25);
        if (direction === 'left' && currentPage > 0) {
            setPage(prevValue => prevValue-1);
        }
        if (direction === 'right' && currentPage < maxPage) {
            setPage(prevValue => prevValue+1);
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.formDiv}>
                <form onSubmit={getNFTs}>
                    <label htmlFor='address'>Address: </label>
                    <input type='text' id='address' name='address' ref={inputRef}></input>
                </form>
                <button onClick={getNFTs}>Load NFTs</button>
            </div>
            <div className={styles.wallet}>
                <div>ETH Address: {address}</div>
                <div>NFT Count: {totalCount}</div>
                <div>Balance: {ethBalance/1000000000000000000 || 0} ETH</div>
            </div>
            <div className={styles.itemsContainer}>
                {nftList.length ? 
                    <div id={styles.pageNav}>
                        <button onClick={() => changePage('left')}>Previous</button>
                        <div>{currentPage+1}/{Math.floor((nftList.length-1)/25)+1}</div>
                        <button onClick={() => changePage('right')}>Next</button>
                </div> : null
                }
                <div className={styles.items}>
                    {nftList.slice(currentPage*25, currentPage*25+25).map((nft: any) => <Item key={nft.contractAddress + nft.tokenId} metadata={nft}/>) || null}
                </div>
            </div>
        </div>
    )
}