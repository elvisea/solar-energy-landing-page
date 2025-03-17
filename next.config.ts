import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  experimental: {
    optimizeCss: false,
  },
  // Otimiza imagens
  images: {
    unoptimized: true, // Para build mais rápido
  },
  // Compressão
  compress: true,
};

export default nextConfig;
