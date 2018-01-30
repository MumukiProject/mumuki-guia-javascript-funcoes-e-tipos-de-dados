describe("", function() {
  it(longitudeNomeCompleto("Cosme", "Fulano"), function() {
    assert.equal(longitudeNomeCompleto("Cosme", "Fulano"), 12);
  });
  it(longitudeNomeCompleto("John", "Snow"), function() {
    assert.equal(longitudeNomeCompleto("John", "Snow"), 9);
  });
  it(longitudeNomeCompleto("Juana", "Azurduy"), function() {
    assert.equal(longitudeNomeCompleto("Juana", "Azurduy"), 13);
  });
})