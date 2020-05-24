var assert = require("assert");
var expect = require("chai").expect;
describe("Covid Dashboard", () => {
  before(() => {
    browser.url("/");
  });

  it("should change values when contry changed to India", function() {
    browser.pause(4000);
    const INFECTEDCOUNT = $(
      "//p[text()='Infected']/following-sibling::h5/span"
    ).getText();
    $("select").selectByVisibleText("India");

    const newInfectedCount = $(
      "//p[text()='Infected']/following-sibling::h5/span"
    ).getText();
    expect(newInfectedCount).to.not.equal(INFECTEDCOUNT);
    console.warn("INFECTEDCOUNT" + INFECTEDCOUNT);
    console.warn("newInfectedCount --" + newInfectedCount);
  });

  it("should change values when contry changed to Global", function() {
    const INFECTEDCOUNT = $(
      "//p[text()='Infected']/following-sibling::h5/span"
    ).getText();
    $("select").selectByVisibleText("Global");
    browser.pause(5000);
    const newInfectedCount = $(
      "//p[text()='Infected']/following-sibling::h5/span"
    ).getText();
    expect(newInfectedCount).to.not.equal(INFECTEDCOUNT);
    console.warn("INFECTEDCOUNT" + INFECTEDCOUNT);
    console.warn("newInfectedCount --" + newInfectedCount);
  });

  it("should scroll to chart and mouse hover on chart", function() {
    $("select").selectByVisibleText("India");
    $("canvas").scrollIntoView();
    $("canvas").moveTo();
    browser.pause(5000);
  });
});
