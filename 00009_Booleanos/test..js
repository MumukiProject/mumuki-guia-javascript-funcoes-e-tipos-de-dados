describe("", function() {
  it("estaEntre(10, 1, 10) é false", function() {
    assert(!estaEntre(10, 1, 10));
  });
  it("estaEntre(12, 1, 10) é false", function() {
    assert(!estaEntre(12, 1, 10));
  });
  it("estaEntre(200, 54, 112) é false", function() {
    assert(!estaEntre(200, 54, 112));
  });
  it("estaEntre(67, 0, 100) é true", function() {
    assert(estaEntre(67, 0, 100));
  });
  it("estaEntre(2, 0, 100) é true", function() {
    assert(estaEntre(2, 0, 100));
  });
})

describe("estaForaDoAlcance", function() {
  it("estaForaDoAlcance(10, 1, 10) é false", function() {
    assert(!estaForaDoAlcance(10, 1, 10));
  });
  it("estaForaDoAlcance(12, 1, 10) é true", function() {
    assert(estaForaDoAlcance(12, 1, 10));
  });
  it("estaForaDoAlcance(200, 54, 112) é true", function() {
    assert(estaForaDoAlcance(200, 54, 112));
  });
  it("estaForaDoAlcance(67, 0, 100) é false", function() {
    assert(!estaForaDoAlcance(67, 0, 100));
  });
  it("estaForaDoAlcance(2, 0, 100) é false", function() {
    assert(!estaForaDoAlcance(2, 0, 100));
  });
})