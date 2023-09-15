import styles from './page.module.css'

export default function Item(props: any) {
    const { contractAddress, contractName, floorPrice, name, tokenId, url } = props.metadata;
    return (
        <div className={styles.item}>
            <img src={url} style={{ width: '200px', height: '200px' }}/><img />
            <a href={`https://opensea.io/assets/ethereum/${contractAddress}/${tokenId}`} target='_blank'>{name || `${contractName} #${tokenId}`}</a>
            <div style={{width: '100%', margin: '1rem 0 0 0'}}>
                <a href={`https://opensea.io/assets/ethereum/${contractAddress}`} target='_blank' style={{fontWeight: '900'}}>{contractName}</a>
                <p>Floor price: {floorPrice || 0} ETH</p>
            </div>
        </div>
    )
}