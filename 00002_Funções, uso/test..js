describe("", function() {
  it("anterior(1) é 0", function() {
    assert.equal(anterior(1), 0);
  });
  it("anterior(10) é 9", function() {
    assert.equal(anterior(10), 9);
  });
})


describe("triplo", function() {
  it("triplo(1) é 3", function() {
    assert.equal(triplo(1), 3);
  });
  it("triplo(3) é 9", function() {
    assert.equal(triplo(3), 9);
  });
})

describe("anteriorDoTriplo", function() {
  it("anteriorDoTriplo(1) é 2", function() {
    assert.equal(anteriorDoTriplo(1), 2);
  });
  it("anteriorDoTriplo(3) é 8", function() {
    assert.equal(anteriorDoTriplo(3), 8);
  });
  it("anteriorDoTriplo(10) é 29", function() {
    assert.equal(anteriorDoTriplo(10), 29);
  });
})

