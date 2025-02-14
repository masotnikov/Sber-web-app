import { ModuleOptions } from "webpack";
import { BuildOptions } from "./types/types";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshTypeScript from "react-refresh-typescript";
import {buildCssLoader} from "./loaders/buildCssLoader";

export function buildLoaders ({ isDev }: BuildOptions): ModuleOptions["rules"] {

  const tsLoader = {
    exclude: /node_modules/,
    test: /\.tsx?$/,
    use: [
      {
        loader: "ts-loader",
        options: {
          transpileOnly: true,
          getCustomTransformers: () => ({
            before: isDev ? [ReactRefreshTypeScript()].filter(Boolean) : [],
          }),
        },
      },
    ],
  };

  const babelLoader = {
    test: /\.(js|ts|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
    },
  };
  
  const assetLoader = {
    test: /\.(png|jpe?g|woff2?)$/i,
    type: "asset/resource",
  };


  const svgrLoader = {
    test: /\.svg$/i,
    use: [
      {
        loader: "@svgr/webpack",
        options: {
          icon: true,
          svgoConfig: {
            plugins: [
              {
                name: "convertColors",
                params: {
                  currentColor: true,
                }
              }
            ]
          }
        }
      }
    ],
  };


  const cssLoader = buildCssLoader(isDev);

  return [
    assetLoader,
    // tsLoader,
    babelLoader,
    cssLoader,
    svgrLoader
  ];
}
