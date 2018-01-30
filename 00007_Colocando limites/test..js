describe("", function() {
  it("extrair(100, 20) == 80", function() {
    assert.equal(extrair(100, 20), 80);
  });
  
  it("extrair(100, 10) == 90", function() {
    assert.equal(extrair(100, 10), 90);
  });
  
  it("extrair(100, 0) == 100", function() {
    assert.equal(extrair(100, 0), 100);
  });
  
  it("extrair(100, 100) == 0", function() {
    assert.equal(extrair(100, 100), 0);
  });
  
  it("extrair(100, 120) == 0", function() {
    assert.equal(extrair(100, 120), 0);
  });
  
  it("extrair(100, 220) == 0", function() {
    assert.equal(extrair(100, 220), 0);
  });
});