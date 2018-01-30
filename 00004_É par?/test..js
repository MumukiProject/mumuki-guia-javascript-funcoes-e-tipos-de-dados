describe('', function() {
  it("ePar(2) é verdade", function() {
    assert(ePar(2));
  });
  
  it("ePar(8) é verdade", function() {
    assert(ePar(8));
  });
  
  it("ePar(9890) é verdade", function() {
    assert(ePar(9890));
  });
  
  it("ePar(1) é falso", function() {
    assert(!ePar(1));
  });
  
  it("ePar(879) é falso", function() {
    assert(!ePar(879));
  });
})