export namespace module {
    let rules: ({
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
}
export namespace resolve {
    let extensions: string[];
}
