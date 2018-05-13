const createNode = (name) => ({
  id: name,
  opened: true,
  best: -1,
  bestOrigin: null,
  vertices: []
});

const createVertex = (cost, node) => ({cost, destiny: node})

// Creating nodes
const a = createNode('a');
const b = createNode('b');
const c = createNode('c');
const d = createNode('d');
const e = createNode('e');
const f = createNode('f');
const g = createNode('g');
const h = createNode('h');
const i = createNode('i');
const j = createNode('j');

// Creating vertices
a.vertices.push(createVertex(3, b));
a.vertices.push(createVertex(2, d));
a.vertices.push(createVertex(1, c));
b.vertices.push(createVertex(1, e));
b.vertices.push(createVertex(2, f));
b.vertices.push(createVertex(1, d));
c.vertices.push(createVertex(2, d));
d.vertices.push(createVertex(3, f));
d.vertices.push(createVertex(1, g));
e.vertices.push(createVertex(1, j));
e.vertices.push(createVertex(2, f));
f.vertices.push(createVertex(1, i));
f.vertices.push(createVertex(3, j));
g.vertices.push(createVertex(1, h));
g.vertices.push(createVertex(3, i));
h.vertices.push(createVertex(1, i));
i.vertices.push(createVertex(2, j));

const execute = (start) => {
  const openedNodes = [];
  openedNodes.push(start);

  let keepGoing = true;
  while (keepGoing) {
    keepGoing = false;

    // Find the one with smallest distance.
    let cur = null;
    openedNodes.forEach((n) => {
      if (n.opened && (cur === null || cur.best > n.best)) {
        cur = n;
      }
    });

    // Process current.
    cur.vertices.forEach((v) => {
      const possibleNewBest = cur.best + v.cost;
      if (possibleNewBest < v.destiny.best || v.destiny.best === -1) {
        v.destiny.best = possibleNewBest;
        v.destiny.bestOrigin = cur;
      }

      if (v.destiny.opened) {
        keepGoing = true;
        openedNodes.push(v.destiny);
      }
    });

    cur.opened = false;
  }
}

execute(a);

let cur = i;
while (cur !== null) {
  console.log(cur.id);
  cur = cur.bestOrigin;
}