let array = [
  {
    id: 22,
    code: "Blowouts",
  },
  {
    id: 25,
    code: "Fashion",
  },
  {
    id: 21,
    code: "Haircuts",
  },
  {
    id: 27,
    code: "Med Spa / Skin Services",
  },
  {
    id: 24,
    code: "Photographic/Film",
  },
  {
    id: 23,
    code: "Prom",
  },
  {
    id: 26,
    code: "Wedding",
  },
  {
    id: 28,
    code: "Prom",
  },
  {
    id: 29,
    code: "Wedding",
  },
  {
    id: 26,
    code: "Wedding",
  },
  {
    id: 28,
    code: "Prom",
  },
  {
    id: 29,
    code: "Wedding",
  },
];

console.log(array.length);
function fun(array = []) {
  let newArray = [];
  let countdown = array.length;
  const sortedArray = array.sort((a, b) => a.id - b.id);
  sortedArray.forEach((value, i) => {
    if (countdown >= 2) {
      newArray.push([array[countdown - 1], array[countdown - 2]]);
      countdown = countdown - 2;
    } else if (countdown === 1) {
      newArray.push([array[countdown - 1]]);
      countdown = countdown - 1;
    }
  });
  return newArray;
}
console.log(fun(array));
