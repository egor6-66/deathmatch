import forkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer'


const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,

  },
  reactStrictMode: false,
  webpack(config, options) {
    const {dev, isServer} = options;
    if (dev && isServer) {
      config.plugins.push(new forkTsCheckerWebpackPlugin());
    }
    if (process.env.ANALYZE) {
      config.plugins.push(new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        reportFilename: isServer ? '../analyze/server.html' : './analyze/client.html',
        openAnalyzer: true
      }));
    }

    if(config.resolve?.fallback){
      config.resolve.fallback.fs = false
    }

    return config;
  }
};

export default nextConfig;
