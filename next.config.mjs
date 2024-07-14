import forkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer'


const nextConfig = {
  typescript: {
    ignoreBuildErrors: true
  },
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

    return config;
  }
};

export default nextConfig;
