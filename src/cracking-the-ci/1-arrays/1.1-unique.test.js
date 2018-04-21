const {isUnique, isUniqueWithoutHT} = require("./1.1-unique");

describe("CCI-1.1 - unique letters string", () => {
    describe("With hashtable", () => {
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
            expect(isUnique("helolxtl")).toEqual(false);
        });

        it("should return false in big case", () => {
            const input = "Phil.master nu";
            expect(isUnique(input)).toEqual(true);
        });

        it("should return false in edge case", () => {
            const input = "fhaoiadshfkdsajhfoqewhriuhasdfidsaflkhdsfdsaiofhdsaifuhdasoifuhdasufhioeuh" +
            "qwriuhreaiohaofiuhdsifouhdasifouhasdoifuhasdoifuhadsoifuhoasdiuhfoaisduhfoiasduhfoidasuhf" +
            "xcbvxzmaireyioqhfdisahfuisadhfoidsauhf";

            expect(isUnique(input)).toEqual(false);
        });
    });

    describe("Without Hashtable", () => {
        it("should return false when empty", () => {
            expect(isUniqueWithoutHT("")).toEqual(false);
        });

        it("should return true when single letter", () => {
            expect(isUniqueWithoutHT("a")).toEqual(true);
        });

        it("should return true", () => {
            expect(isUniqueWithoutHT("abutre")).toEqual(true);
        });

        it("should return false", () => {
            expect(isUniqueWithoutHT("helolxtl")).toEqual(false);
        });

        it("should return false in big case", () => {
            const input = "Phil.master nu";
            expect(isUniqueWithoutHT(input)).toEqual(true);
        });

        it("should return false in edge case", () => {
            const input = "fhaoiadshfkdsajhfoqewhriuhasdfidsaflkhdsfdsaiofhdsaifuhdasoifuhdasufhioeuh" +
            "qwriuhreaiohaofiuhdsifouhdasifouhasdoifuhasdoifuhadsoifuhoasdiuhfoaisduhfoiasduhfoidasuhf" +
            "xcbvxzmaireyioqhfdisahfuisadhfoidsauhf";

            expect(isUniqueWithoutHT(input)).toEqual(false);
        });
    });
});