// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: 'export',
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
//   images: { unoptimized: true },
// };

// module.exports = nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuración para Leaflet
   images: { unoptimized: true },
  webpack: (config, { isServer }) => {
    // Prevenir errores de Leaflet en el servidor
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }
    
    return config;
  },
  
  // Optimizaciones para Next.js 15
  experimental: {
    // Desactivar optimizaciones problemáticas temporalmente
    optimizePackageImports: ['react-leaflet', 'leaflet'],
  },
  
  // Configuración para módulos ES
  transpilePackages: ['react-leaflet'],
  
  // Headers para mapas
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cross-Origin-Embedder-Policy',
            value: 'unsafe-none',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;