var compare = require('../lib/index.cjs.js');
var expect = require('chai').expect;

describe('版本号比较测试', function () {
  it('v1大于v2', function () {
    expect(compare('11.23.2', '11.21.2')).to.be.equal(true);
  });
  it('v1大于v2', function () {
    expect(compare('11.23.20000', '11.23.00001')).to.be.equal(true);
  });
  it('v1小于v2', function () {
    expect(compare('11.23.2', '11.23.20')).to.be.equal(false);
  });
  it('v1小于v2', function () {
    expect(compare('2.7.14.2345', '2.12.8.1234')).to.be.equal(false);
  });
  it('v1小于v2', function () {
    expect(compare('3.0.0.1', '3.0.0.1.1')).to.be.equal(false);
  })
});