describe("", function() {
  it("signo(10) é 1", function() {
    assert.equal(signo(10), 1)
  });
  it("signo(1) é 1", function() {
    assert.equal(signo(1), 1)
  })
  it("signo(0) é 0", function() {
    assert.equal(signo(0), 0)
  })
  it("signo(-65) é -1", function() {
    assert.equal(signo(-65), -1)
  })
})
