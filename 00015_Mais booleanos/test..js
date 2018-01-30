describe("", () => {
  it("eNumeroDeSorte (2) é verdade", () => {
      assert(eNumeroDeSorte (2));
  })
  it("eNumeroDeSorte (4) é verdade", () => {
      assert(eNumeroDeSorte(4));
  })
  it("eNumeroDeSorte(6) é verdade", () => {
      assert(eNumeroDeSorte(6));
  })
  it("eNumeroDeSorte(8) é verdade", () => {
      assert(eNumeroDeSorte(8));
  })
  it("eNumeroDeSorte(9) é verdade", () => {
      assert(eNumeroDeSorte(9));
  })
  it("eNumeroDeSorte(81) é verdade", () => {
      assert(eNumeroDeSorte(81));
  })
  it("eNumeroDeSorte(12456) é verdade", () => {
      assert(eNumeroDeSorte(12456));
  })
  it("eNumeroDeSorte(3003) é verdade", () => {
      assert(eNumeroDeSorte(3003));
  })
  it("eNumeroDeSorte é verdade se é um múltiplo de 2", () => {
      assert(eNumeroDeSorte(4654));
  })
  it("eNumeroDeSorte é falso se não for um múltiplo de 2 ou 3", () => {
      assert(!eNumeroDeSorte(49));
  })
  it("eNumeroDeSorte(7) é falso", () => {
      assert(!eNumeroDeSorte(7));
  })
  it("eNumeroDeSorte(15) é falso", () => {
      assert(!eNumeroDeSorte(15));
  })
})
