/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
    images: {
        domains: [
            'nft-cdn.alchemy.com',
            'ipfs.io'
        ]
    },
    trailingSlash: true,
    output: 'export',
}

module.exports = nextConfig
