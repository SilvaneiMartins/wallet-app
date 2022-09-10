module.exports = function (api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
        plugins: [
            "react-native-reanimated/plugin",
            [
                "module-resolver",
                {
                    root: ["./"],
                    extensions: [".js", ".jsx", ".ts", ".tsx"],
                    alias: {
                        "@assets": "./src/assets",
                        "@components": "./src/components",
                        "@config": "./src/config",
                        "@hooks": "./src/hooks",
                        "@routes": "./src/routes",
                        "@screens": "./src/screens",
                        "@services": "./src/services",
                        "@styles": "./src/styles",
                        "@utils": "./src/assets",
                    },
                },
            ],
        ],
    };
};
