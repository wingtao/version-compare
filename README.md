# version-compare

[![GitHub issues](https://img.shields.io/github/issues/wingtao/version-compare.svg)](https://github.com/wingtao/version-compare/issues)
[![GitHub license](https://img.shields.io/github/license/wingtao/version-compare.svg)](https://github.com/wingtao/version-compare/blob/master/LICENSE)

[中文版](README-CN.md)

## Usage

    npm install version-compare

## Example

    import compare from 'version-compare'
    compare('7.2.1', '7.6.1') // return false
    compare('3.8.3', '2.6') // return true

## Features

like the name, this library is used to compare the version，just be useful for the format like 'Major.Minor.Patch'.