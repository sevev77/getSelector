const getSelectorWithDFS = (node, name) => {
  if (!node.children) return;

  if ([...node.classList].includes(name)) return node;

  const arr = [...node.children];

  for (var i = 0; i < arr.length; i++) {
    return getSelectorWithDFS(arr[i], name);
  }
};

console.log(getSelectorWithDFS(document.querySelector("body"), "title"));
