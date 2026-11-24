/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true },
  async redirects() {
    return [
      {
        source: "/kieran-pritchard.jpg",
        destination: "/images/profile/kieran-pritchard.jpg",
        permanent: true,
      },
      {
        source: "/kieran_pritchard_cv.pdf",
        destination: "/documents/kieran-pritchard-cv.pdf",
        permanent: true,
      },
      {
        source: "/blogs/top-5-favourite-cyber-security-tools.png",
        destination: "/blogs/top-5-favorite-cybersecurity-tools.png",
        permanent: true,
      },
      {
        source: "/projects/recipe-manager/recipe_manager_header.png",
        destination: "/projects/recipe-manager/recipe-manager-header.png",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
