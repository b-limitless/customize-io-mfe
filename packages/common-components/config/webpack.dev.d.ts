declare const _exports: {
    module: {
        rules: ({
            test: RegExp;
            use: string;
            exclude: RegExp;
        } | {
            test: RegExp;
            exclude: RegExp;
            use: {
                loader: string;
                options: {
                    presets: string[];
                    plugins: string[];
                };
            };
        } | {
            test: RegExp;
            use: string[];
            exclude?: undefined;
        })[];
    };
    resolve: {
        extensions: string[];
    };
};
export = _exports;
