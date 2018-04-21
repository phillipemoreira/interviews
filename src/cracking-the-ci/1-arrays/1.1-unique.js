const isUnique = (s) => {
    if (!s || s.length === 0) return false;
    else if (s.length === 1) return true;

    const checker = {};
    for (let i = 0; i < s.length; i += 1) {
        if (s[i] === " ") continue;
        if (checker[s[i]]) return false;
        checker[s[i]] = 1;
    }

    return true;
};

exports.isUnique = isUnique;