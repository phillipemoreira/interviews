// O(N) time; O(N) Space.
const isUnique = (s) => {
    if (!s || s.length === 0) return false;

    // ASCII different chars
    else if (s.length > 128) return false;

    const checker = {};
    for (let i = 0; i < s.length; i += 1) {
        if (checker[s[i]]) return false;
        checker[s[i]] = 1;
    }

    return true;
};

// O(N logN) time; O(1) space.
const isUniqueWithoutHT = (s) => {
    if (!s) return false;
    // ASCII different chars
    else if (s.length > 128) return false;

    const x = s.split("").sort();
    for (let i = 1; i < s.length - 1; i += 1) {
        if (x[i] === x[i - 1]) return false;
    }

    return true;
}

exports.isUnique = isUnique;
exports.isUniqueWithoutHT = isUniqueWithoutHT;