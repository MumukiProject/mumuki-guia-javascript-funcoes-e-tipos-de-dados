describe("", function() {
  it("anterior(1) é 0", function() {
    assert.equal(anterior(1), 0);
  });
  it("anterior(10) é 9", function() {
    assert.equal(anterior(10), 9);
  });
})


describe("triple", function() {
  it("triple(1) é 3", function() {
    assert.equal(triple(1), 3);
  });
  it("triple(3) é 9", function() {
    assert.equal(triple(3), 9);
  });
})

describe("anteriorDelTriple", function() {
  it("anteriorDelTriple(1) é 2", function() {
    assert.equal(anteriorDelTriple(1), 2);
  });
  it("anteriorDelTriple(3) é 8", function() {
    assert.equal(anteriorDelTriple(3), 8);
  });
  it("anteriorDelTriple(10) é 29", function() {
    assert.equal(anteriorDelTriple(10), 29);
  });
})

