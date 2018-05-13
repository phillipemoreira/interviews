const {isPermutation} = require("../1.2-is-permutation");

describe("CCI-1.1 - unique letters string", () => {
  it('should return true', () => {
    expect(isPermutation("ovo", "voo")).toBe(true);
  });

  it('should return false', () => {
    expect(isPermutation("vaca", "vaco")).toBe(false);
  });

  it('should return true for a bigger case', () => {
    expect(isPermutation("barata", "tabara")).toBe(true);
  });

  it('should return false when different lengths', () => {
    expect(isPermutation("a", "fasdf")).toBe(false);
  });
});