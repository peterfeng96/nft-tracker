/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
    images: {
        domains: [
            'nft-cdn.alchemy.com',
            'ipfs.io'
        ]
    },
    // output: 'export',
}

module.exports = nextConfig
