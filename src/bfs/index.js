const getSelectorWithBFS = (node, name) => {
  let arr = node.children;

  arr = [...arr, ...arr[0].children];

  while (arr.length > 0) {
    if (Array.from(arr[0].classList).includes(name)) {
      return arr[0];
    }
    arr.shift();
  }
};

console.log(getSelectorWithBFS(document.querySelector("body"), "title"));
