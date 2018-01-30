describe("", function() {
  it("medalhaDeAcordoComPosto(1)", function() {
    assert.equal(medalhaDeAcordoComPosto(1), "ouro")
  })
  it("medalhaDeAcordoComPosto(2)", function() {
    assert.equal(medalhaDeAcordoComPosto(2), "prata")
  })
  it("medalhaDeAcordoComPosto(3)", function() {
    assert.equal(medalhaDeAcordoComPosto(3), "bronze")
  })
  it("medalhaDeAcordoComPosto(4)", function() {
    assert.equal(medalhaDeAcordoComPosto(4), "nada")
  })
  it("medalhaDeAcordoComPosto(5)", function() {
    assert.equal(medalhaDeAcordoComPosto(5), "nada")
  })
  it("medalhaDeAcordoComPosto(0)", function() {
    assert.equal(medalhaDeAcordoComPosto(0), "nada")
  })
})