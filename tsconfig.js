{
    {
        "compilerOptions";
        {
            "target";
            "es2016" /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */,
                "experimentalDecorators";
            true /* Enable experimental support for TC39 stage 2 draft decorators. */,
                "module";
            "commonjs" /* Specify what module code is generated. */,
                "rootDir";
            "./src" /* Specify the root folder within your source files. */,
                "outDir";
            "./dist",
                "esModuleInterop";
            true /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables 'allowSyntheticDefaultImports' for type compatibility. */,
                "forceConsistentCasingInFileNames";
            true /* Ensure that casing is correct in imports. */,
                "strict";
            true /* Enable all strict type-checking options. */,
                "skipLibCheck";
            true; /* Skip type checking all .d.ts files. */
        }
        "include";
        ["src/**/*", "test/**/*"];
    }
}
