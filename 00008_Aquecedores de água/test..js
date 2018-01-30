describe("", function() {
  it("quantoCarrega(10, 5)", function() {
    assert.equal(quantoCarrega(10, 5), 5);
  });
  it("quantoCarrega(15, 5)", function() {
    assert.equal(quantoCarrega(15, 5), 5);
  });
  it("quantoCarrega(20, 5)", function() {
    assert.equal(quantoCarrega(20, 5), 5);
  });
  it("quantoCarrega(20, 2)", function() {
    assert.equal(quantoCarrega(20, 2), 2);
  });
  it("quantoCarrega(22, 5)", function() {
    assert.equal(quantoCarrega(22, 5), 3);
  });
  it("quantoCarrega(24, 2)", function() {
    assert.equal(quantoCarrega(24, 2), 1);
  });
  it("quantoCarrega(25, 5)", function() {
    assert.equal(quantoCarrega(25, 5), 0);
  });
});

