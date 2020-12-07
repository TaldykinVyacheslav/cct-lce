const path = require('path');
module.exports = {
   entry: [
       "./app/LCE.ts",
       "./app/CCT.ts",
       "./app/Util.ts",
   ],
   output: {
       filename: "bundle.js",
       path: path.resolve(__dirname, 'dist.browser')
   },
   resolve: {
       extensions: [".ts", ".js"]
   },
   module: {
       rules: [{ test: /\.ts$/, loader: "ts-loader" }]
   }
}