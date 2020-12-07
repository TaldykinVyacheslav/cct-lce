const path = require('path');
module.exports = {
   entry: [
       "./app/LCE.ts"
   ],
   output: {
       library: 'CctLce',
       libraryTarget: 'assign',
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