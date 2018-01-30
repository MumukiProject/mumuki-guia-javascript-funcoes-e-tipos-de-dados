describe("", function() {
  it('eFimDeSemana("sábado")', function() {
    assert(eFimDeSemana("sábado"));
  });
  it('eFimDeSemana("domingo")', function() {
    assert(eFimDeSemana("domingo"));
  });
  it('eFimDeSemana("segunda-feira")', function() {
    assert(!eFimDeSemana("segunda_feira"));
  })
  it('eFimDeSemana("quinta-feira")', function() {
    assert(!eFimDeSemana("quinta-feira"));
  })
})