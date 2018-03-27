const {mergeSort} = require("./merge-sort");

describe("Merge sort", () => {
    it("should return empty", () => {
        expect(mergeSort([])).toEqual([]);
    });

    it("should return empty when invalid", () => {
        expect(mergeSort()).toEqual([]);
    });

    it("should order simple case", () => {
        expect(mergeSort([3, 2, 1])).toEqual([1, 2, 3]);
    });

    it("should order simple case", () => {
        const input = [0, 37, -2, 99, -55, 10, 17, 80, 1, -1, 2];
        expect(mergeSort(input)).toEqual([-55, -2, -1, 0, 1, 2, 10, 17, 37, 80, 99]);
    });
});