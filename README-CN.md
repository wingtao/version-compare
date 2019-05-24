# version-compare

[![GitHub issues](https://img.shields.io/github/issues/wingtao/version-compare.svg)](https://github.com/wingtao/version-compare/issues)
[![GitHub license](https://img.shields.io/github/license/wingtao/version-compare.svg)](https://github.com/wingtao/version-compare/blob/master/LICENSE)

## 用法

    npm install version-compare

## 例子

    import compare from 'version-compare'
    compare('7.2.1', '7.6.1') // return false
    compare('3.8.3', '2.6') // return true

## 功能

就如包名，用来比较版本号大小。

## TODO

0. 单测完善 <input type="checkbox" />
1. ES6->ES5 <input type="checkbox" checked/>
2. 压缩、混淆 <input type="checkbox" />