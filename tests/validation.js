var assert = require("assert");
var expect = require("chai").expect;
describe("Covid Dashboard", () => {
  before(() => {
    browser.url("/");
  });

  it("should show dashboard", function() {
    var check = $("img.App_image__3byI1").isDisplayed();
    assert.equal(check, true);
  });
  it("Title should be a 'React App'", function() {
    assert.equal(browser.getTitle(), "React App");
  });
  it("show Infected count", function() {
    let text = $("//p[text()='Infected']/following-sibling::h5/span").getText();
    console.log(
      $("//p[text()='Infected']/following-sibling::h5/span").getText()
    );
    expect(text.length).to.above(0);
  });

  it("show Recovered count", function() {
    let text = $(
      "//p[text()='Recovered']/following-sibling::h5/span"
    ).getText();
    console.log(
      $("//p[text()='Recovered']/following-sibling::h5/span").getText()
    );
    expect(text.length).to.above(0);
  });

  it("show Deaths count", function() {
    let text = $("//p[text()='Deaths']/following-sibling::h5/span").getText();
    console.log($("//p[text()='Deaths']/following-sibling::h5/span").getText());
    expect(text.length).to.above(0);
  });

  it("show country dropdown", function() {
    expect($("select").isDisplayed()).to.equal(true);
  });
});
