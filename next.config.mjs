/** @type {import('next').NextConfig} */

// const path = require('path')
 
const nextConfig = {
    reactStrictMode: true,
    compiler: {
        styledComponents: true,
    },
    images: {
        remotePatterns: [
            {
            protocol: 'https',
            hostname: 'jealousgallery.com',
            port: '',
            pathname: '/cdn/shop/products/**',
            },
        ],
    },
    // sassOptions: {
    //   includePaths: [path.join(__dirname, 'styles')],
    // }
  };
  
  export default nextConfig;
