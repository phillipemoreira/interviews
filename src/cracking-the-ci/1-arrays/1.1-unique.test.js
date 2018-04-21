const {isUnique} = require("./1.1-unique");

describe("CCI-1.1 - unique letters string", () => {
    it("should return false when empty", () => {
        expect(isUnique("")).toEqual(false);
    });

    it("should return true when single letter", () => {
        expect(isUnique("a")).toEqual(true);
    });

    it("should return true", () => {
        expect(isUnique("abutre")).toEqual(true);
    });

    it("should return false", () => {
        expect(isUnique("hello")).toEqual(false);
    });

    it("should return false in big case", () => {
        const input = "Phil master nu";
        expect(isUnique(input)).toEqual(true);
    });
});