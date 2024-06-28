# Webpack Harmony Side Effect Evaluation Bug

Webpack is unexpectedly requiring `react-router-dom` in the final build even though the code that uses it was tree-shaken and the module has `sideEffects: false` set in the package.json.

From the build output

```
    | external "react-router-dom" 42 bytes [depth 2] [dependent] [built]
    |   [no exports used]
    |   harmony side effect evaluation react-router-dom ./src/lib.js 1:0-45
    |   [inactive] harmony import specifier react-router-dom ./src/lib.js 4:9-18
```

### Running locally

```
npm i
npm run build
```
