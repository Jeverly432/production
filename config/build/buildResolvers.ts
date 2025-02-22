import { ResolveOptions } from "webpack";
import { BuildOptions } from "./types/config";

export function buildResolvers(options: BuildOptions): ResolveOptions {
    return {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        preferAbsolute: true,
        modules: [options.paths.src, "node_modules"],
        mainFiles: ["index"],
        alias: {
            "react/jsx-runtime": require.resolve("react/jsx-runtime"),
        },
    };
}
