import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildBabelLoader } from './loaders/buildBabelLoader';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const { isDev } = options;

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };
    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };
    const codeBabelLoader = buildBabelLoader({ ...options, isTsx: false });
    const tsxBabelLoader = buildBabelLoader({ ...options, isTsx: true });
    const cssLoader = buildCssLoader(isDev);
    // const typescriptLoader = {
    // // Указыываем файлы которые необходимо пропустить через loader
    //     test: /\.tsx?$/,
    //     use: 'ts-loader',
    //     exclude: /node-modules/,
    // };
    return [fileLoader, svgLoader, codeBabelLoader,
        tsxBabelLoader, cssLoader];
}
