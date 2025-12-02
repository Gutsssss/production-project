import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildResolvers } from './buildResolvers';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig(
    options: BuildOptions,
): webpack.Configuration {
    const {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        paths, mode, isDev, apiUrl,
    } = options;
    return {
        mode,
        // Стартовая точка приложения
        entry: paths.entry,
        // Настройка куда и как мы будем делать сборку приложения
        output: {
            filename: '[name].[contenthash].js',
            path: paths.output,
            clean: true,
            publicPath: '/',
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
        devtool: isDev ? 'eval-cheap-module-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
    };
}
