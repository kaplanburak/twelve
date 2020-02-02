const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

const mode = process.env.NODE_ENV || "development";
const prod = mode === "production";

const { scss } = require("svelte-preprocess");

module.exports = {
    entry: {
        bundle: ["./src/main.js"],
    },
    resolve: {
        alias: {
            svelte: path.resolve("node_modules", "svelte"),
            "@Pages": path.resolve(__dirname, "src/pages/"),
            "@Components": path.resolve(__dirname, "src/components/"),
            "@Hooks": path.resolve(__dirname, "src/hooks/"),
            "@Helpers": path.resolve(__dirname, "src/helpers/"),
            "@Store": path.resolve(__dirname, "src/store/"),
            "@Icons": path.resolve(__dirname, "src/static/icons"),
        },
        extensions: [".mjs", ".js", ".svelte"],
        mainFields: ["svelte", "browser", "module", "main"],
    },
    output: {
        path: __dirname + "/public",
        filename: "[name].js",
        chunkFilename: "[name].[id].js",
    },
    module: {
        rules: [
            {
                test: /\.svelte$/,
                use: {
                    loader: "svelte-loader",
                    options: {
                        emitCss: true,
                        hotReload: true,
                        preprocess: require("svelte-preprocess")([scss()]),
                    },
                },
            },
            {
                test: /\.css$/,
                use: [
                    /**
                     * MiniCssExtractPlugin doesn't support HMR.
                     * For developing, use 'style-loader' instead.
                     * */
                    prod ? MiniCssExtractPlugin.loader : "style-loader",
                    "css-loader",
                ],
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: "svg-inline-loader",
                        options: {
                            removeSVGTagAttrs: true,
                        },
                    },
                ],
            },
            {
                test: /\.(png|jpe?g|gif|mp4|ttf)$/,
                use: [
                    {
                        loader: "file-loader",
                    },
                ],
            },
        ],
    },
    mode,
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
        }),
    ],
    devtool: prod ? false : "source-map",
};
