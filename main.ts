const arr: any[] = [1, 2, 3, 4];

// 3

[
  {
    name: "ssk",
    age: 20,
  },
];

console.log(
  arr.findIndex((item, index, a) => {
    item.age === 3;
  })
);

// arr.findIndex()

arr[1];
