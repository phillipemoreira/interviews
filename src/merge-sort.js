const merge = (l, r) => {
    let res = [];
    let li = 0;
    let ri = 0;

    // Comparting while two sublists have have numbers.
    while (li < l.length && ri < r.length) {
        if (l[li] < r[ri]) {
            res.push(l[li])
            li += 1;
        } else {
            res.push(r[ri])
            ri += 1;
        }
    }

    // Concating remainder in left sublist, if there are any.
    res = res.concat(l.slice(li, l.length));

    // Otherwhise concating remainder in right sublist, if there are any.
    res = res.concat(r.slice(ri, r.length));

    return res;
};

const mergeSort = (l) => {
    // Invalid scenarios
    if (!l || l === null) {
        return [];
    }

    // Base case
    if (l.length <= 1) {
        return l;
    }

    // Dividing the problem into two smaller problems
    const mid = Math.floor(l.length / 2);

    // Sorting left sublist
    const left = l.slice(0, mid);
    const sortedLeft = mergeSort(left);

    // Sorting right sublist
    const right = l.slice(mid, l.length);
    const sortedRight = mergeSort(right);

    // Merging them all together
    return merge(sortedLeft, sortedRight);
};

exports.mergeSort = mergeSort;