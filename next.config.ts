import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    // Adicionando o loader para arquivos de vídeo
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|mp3)$/i,
      use: {
        loader: 'file-loader',
        options: {
          name: 'static/media/[name].[hash].[ext]',
        },
      },
    });

    return config;
  },
};

export default nextConfig;
