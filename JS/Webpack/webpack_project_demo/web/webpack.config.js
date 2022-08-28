// npm i -D webpack webpack-cli
// webpack.config.js
// 用於填寫 webpack 打包的相關配置
// 目標 : 使用 ES6 寫法的 index.js 文件打包成 ES5 通用版本 存放在 dist 資料夾
const htmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "production", // 可選值有 production development(帶空行帶註釋)
  entry: "./src/js/index.js", // 入口 代表你要打包的js文件路徑
  output: {
    // 出口 打包後的文件存放在哪裏
    filename: "bundle.js",
    path: __dirname + "/dist",
  },
  // webpack本身只能對js文件進行打包 對其他類型文件打包時必須進行特殊配置
  module: {
    rules: [
      {
        test: /\.css$/, // 監聽 .css結尾的文件
        use: ["style-loader", "css-loader"], // loader: webpack本身只能打包js文件, 要想打包其他類型文件必須下載依賴的工具 npm i -D css-loader style-loader
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/, // 監聽 圖片結尾的文件
        // use: ["file-loader", "url-loader"], // npm i -D file-loader, url-loader
        // loader: "file-loader",
        loader: "url-loader",
        // 默認圖片會出現在dist下方且為了防止重名諱改名字 可通過配置導出到指定文件夾下 維持原有名稱
        options: {
          // options必須配合 loader: xxx 寫法
          name: "img/[name].[ext]",
          // 限制大小 8192B -> 8KB 小於的轉存 base64 大於的依然拷貝
          limit: 8192,
        },
      },
    ],
  },
  plugins: [
    // 設定要加載的插件
    new htmlWebpackPlugin({
      // 自動拷貝並添加
      // 指定要操作的 html 文件
      template: "./index.html",
      minify: {
        collapseBooleanAttributes: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
        removeComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        // removeScriptTypeAttributes: true,
        // removeStyleLinkTypeAttributes: true,
        minifyCSS: true,
        minifyJS: true,
        sortAttributes: true,
        useShortDoctype: true,
      },
      // inject: false,
    }),
  ],
};

// 正則表達式中表示 .css結尾的文件
// /\.css$/
// 打包原理 把css 代碼 打包到 js文件中 合併到一起
// 需要到 index.js 中 最上方添加引入代碼: import style from '../css/index.css'

// 圖片一般結尾 png jpg jpeg gif svg
// /\.(png|jpg|jpeg|gif|svg)$/
// fileloader 只有把用到的圖片打包 過濾掉不用的圖片 減小項目體積
// url-loader 把小於指定大小的圖片 使用base64進行轉碼 把圖片轉為字符串存儲 把超過指定大小的圖片依然採用 file-loader (file-loader的升級版)

// 打包時 需要把 html 文件複製到 dist 文件下並手動修改相對路徑 會非常麻煩
// 使用插件 html-webpack-plugin

// 自動化操作 等於 live server 自動監聽文件修改 有修改就會自動打包與刷新頁面 npm i -D webpack-dev-server
